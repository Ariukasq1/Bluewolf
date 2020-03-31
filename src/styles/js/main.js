// COLLAPSE PUBLIC CLASS DEFINITION
// ================================

var Collapse = function (element, options) {
  this.$element = $(element)
  this.options = $.extend({}, Collapse.DEFAULTS, options)
  this.transitioning = null

  if (this.options.parent) this.$parent = $(this.options.parent)
  if (this.options.toggle) this.toggle()
}

Collapse.DEFAULTS = {
  toggle: true
}

Collapse.prototype.dimension = function () {
  var hasWidth = this.$element.hasClass('width')
  return hasWidth ? 'width' : 'height'
}

Collapse.prototype.show = function () {
  if (this.transitioning || this.$element.hasClass('in')) return

  var startEvent = $.Event('show.bs.collapse')
  this.$element.trigger(startEvent)
  if (startEvent.isDefaultPrevented()) return

  var actives = this.$parent && this.$parent.find('> .panel > .in')

  if (actives && actives.length) {
    var hasData = actives.data('bs.collapse')
    if (hasData && hasData.transitioning) return
    actives.collapse('hide')
    hasData || actives.data('bs.collapse', null)
  }

  var dimension = this.dimension()

  this.$element
    .removeClass('collapse')
    .addClass('collapsing')
  [dimension](0)

  this.transitioning = 1

  var complete = function () {
    this.$element
      .removeClass('collapsing')
      .addClass('collapse in')
    [dimension]('auto')
    this.transitioning = 0
    this.$element.trigger('shown.bs.collapse')
  }

  if (!$.support.transition) return complete.call(this)

  var scrollSize = $.camelCase(['scroll', dimension].join('-'))

  this.$element
    .one($.support.transition.end, $.proxy(complete, this))
    .emulateTransitionEnd(350)
  [dimension](this.$element[0][scrollSize])
}

Collapse.prototype.hide = function () {
  if (this.transitioning || !this.$element.hasClass('in')) return

  var startEvent = $.Event('hide.bs.collapse')
  this.$element.trigger(startEvent)
  if (startEvent.isDefaultPrevented()) return

  var dimension = this.dimension()

  this.$element
  [dimension](this.$element[dimension]())
  [0].offsetHeight

  this.$element
    .addClass('collapsing')
    .removeClass('collapse')
    .removeClass('in')

  this.transitioning = 1

  var complete = function () {
    this.transitioning = 0
    this.$element
      .trigger('hidden.bs.collapse')
      .removeClass('collapsing')
      .addClass('collapse')
  }

  if (!$.support.transition) return complete.call(this)

  this.$element
  [dimension](0)
    .one($.support.transition.end, $.proxy(complete, this))
    .emulateTransitionEnd(350)
}

Collapse.prototype.toggle = function () {
  this[this.$element.hasClass('in') ? 'hide' : 'show']()
}