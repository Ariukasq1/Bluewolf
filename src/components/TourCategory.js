import React from "react";
import Link from "next/link"
import { prefixer, getData } from "../utils";
import List from '../UI/List';
import duration from "./Tour/duration.json";
import theme from "./Tour/theme.json"
import where from "./Tour/where.json"
import SidebarItem from "./Sidebar/SidebarItem";
import axios from "axios";
import Config from "../config"
import { Form } from "react-bootstrap"

export default class TourCategory extends React.Component {

    constructor(props) {
        super(props);
    }
    state = {
        posts: [],
        allPosts: [],
        duration: 'all',
        theme: 'all',
        where: 'all',
        durationCategories: null,
        themeCategories: null,
        whereCategories: null
    }
    componentDidMount() {
        this.setState({ posts: this.props.posts });
        this.setState({ allPosts: this.props.posts });
        this.props.subCategories.map(category => {
            axios.get(`${Config().apiUrl}/wp/v2/categories?parent=` + category.id)
                .then(res => {
                    if (category.id === 38) {
                        this.setState({ durationCategories: res.data })
                    } else if (category.id === 16) {
                        this.setState({ themeCategories: res.data });
                    } else {
                        this.setState({ whereCategories: res.data });
                    }

                })
                .catch(err => console.log(err));
        })
    }
    tourFilter(category, optionIndex) {
        // let options = optionIndex === 0 ? duration : optionIndex === 1 ? theme : where;
        let datas = optionIndex === 0 ? this.state.durationCategories : optionIndex === 1 ? this.state.themeCategories : this.state.whereCategories;
        return (
            <SidebarItem key={optionIndex} title={category.name} classes={'single-sidebar-item-wrap'}>
                {datas && this.renderList(datas, optionIndex)}
            </SidebarItem>
        )
    }
    renderList(options, ind) {
        return (
            <select className="form-select" onChange={ind === 0 ? (event) => this.handleDuration(event) : ind === 1 ? (event) => this.handleTheme(event) : (event) => this.handleWhere(event)} >
                <option defaultValue="all" >all</option>
                {options.map((el, i) => <option value={el.id} key={i}>{el.name}</option>)}
            </select>
        )
    }
    async handleDuration(event) {
        await this.setState({ duration: event.target.value });
        this.filterFunction();
    }
    async handleTheme(event) {
        await this.setState({ theme: event.target.value });
        this.filterFunction();
    }
    async handleWhere(event) {
        await this.setState({ where: event.target.value });
        this.filterFunction();
    }
    filterFunction() {
        if (this.state.duration === "all" && this.state.theme === "all" && this.state.where === "all") {
            this.setState({ posts: this.state.allPosts });
            return;
        }

        if (this.state.duration !== "all" && this.state.theme === "all" && this.state.where === "all") {
            let filteredPost = this.state.allPosts.filter(post => {
                if (post.categories.includes(parseInt(this.state.duration))) {
                    return post;
                }
            })
            this.setState({ posts: filteredPost });

        }
        if (this.state.duration !== "all" && this.state.theme !== "all" && this.state.where === "all") {
            let filteredPost = this.state.allPosts.filter(post => {
                if (post.categories.includes(parseInt(this.state.duration)) && post.categories.includes(parseInt(this.state.theme))) {
                    return post;
                }
            })
            this.setState({ posts: filteredPost });
        }
        if (this.state.duration !== "all" && this.state.theme !== "all" && this.state.where !== "all") {
            let filteredPost = this.state.allPosts.filter(post => {
                if (post.categories.includes(parseInt(this.state.duration)) && post.categories.includes(parseInt(this.state.theme)) && post.categories.includes(parseInt(this.state.where))) {
                    return post;
                }
            })
            this.setState({ posts: filteredPost });
        }
        if (this.state.duration === "all" && this.state.theme !== "all" && this.state.where === "all") {
            let filteredPost = this.state.allPosts.filter(post => {
                if (post.categories.includes(parseInt(this.state.theme))) {
                    return post;
                }
            })
            this.setState({ posts: filteredPost });
        }
        if (this.state.duration === "all" && this.state.theme === "all" && this.state.where !== "all") {
            let filteredPost = this.state.allPosts.filter(post => {
                if (post.categories.includes(parseInt(this.state.where))) {
                    return post;
                }
            })
            this.setState({ posts: filteredPost });
        }
        if (this.state.duration === "all" && this.state.theme !== "all" && this.state.where !== "all") {
            let filteredPost = this.state.allPosts.filter(post => {
                if (post.categories.includes(parseInt(this.state.theme)) && post.categories.includes(parseInt(this.state.where))) {
                    return post;
                }
            })
            this.setState({ posts: filteredPost });
        }
    }
    render() {
        const { subCategories } = this.props;
        if (!this.state.posts) return null;
        return (
            <div className={`page-content-wrapper post-page-content-area sp-y`}>
                <div className="container">
                    <div className="row">
                        <Posts posts={this.state.posts} />
                        <div className="col-lg-3">
                            <div className="sidebar-wrap mt-sm-90 mt-md-100">
                                {this.state.durationCategories && this.state.themeCategories && this.state.whereCategories && subCategories.map((category, ind) => this.tourFilter(category, ind))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
function Posts(props) {
    const { posts } = props;
    if (posts.length === 0) {
        return (
            <div className="col-lg-9 null">
                <div className="empty-state">
                    <h3>
                        Sorry
                    </h3>
                    <p>There are no post in this category yet.</p>
                </div>
            </div>
        )
    }
    return (
        <div className="col-lg-9 null">
            <div className='post-content-wrapper false'>
                <div className="row mtn-30">
                    {
                        posts.map(post => {
                            return (
                                <div key={post.id} className='col-md-6'>
                                    <div className="post-item">
                                        <figure className="post-thumb">
                                            {post.acf.discount ? <span className="discount">{post.acf.discount} </span> : ''}
                                            <Link href={prefixer(`/tour-more/${post.slug}`)}>
                                                <a>
                                                    <img src={getData(post._embedded, 'image')} alt={post.title} />
                                                </a>
                                            </Link>
                                        </figure>
                                        <div className="post-content">
                                            <h2 className="h6">
                                                <Link href={prefixer(`/tour-more/${post.slug}`)}>
                                                    <a>
                                                        <div className="nowrap-text"
                                                            dangerouslySetInnerHTML={{
                                                                __html: post.title.rendered
                                                            }} />
                                                    </a>
                                                </Link>
                                            </h2>
                                            <List classes="intro-list">
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: post.acf.intro_text
                                                    }} />
                                            </List>
                                            <div className="post-meta">
                                                {post.acf.price ?
                                                    <Link href={prefixer(`/tour-more/${post.slug}`)}>
                                                        <a className='post-price'>From: {post.acf.price}</a>
                                                    </Link> : null
                                                }
                                                {post.acf.group_size ?
                                                    <Link href={prefixer(`/tour-more/${post.slug}`)}>
                                                        <a><i className="fa fa-user" aria-hidden="true"></i>&nbsp; {post.acf.group_size}</a>
                                                    </Link>
                                                    : null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    )

}