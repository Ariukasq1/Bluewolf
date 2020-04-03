import React from 'react';
import Link from "next/link";
import { prefixer } from '../../utils'

function LogoItem(props) {
  return (
    <div className="brand-logo-item">
      <Link href={`${prefixer(props.URL)}`}>
        <a>
          <img src={prefixer('/images/' + props.logoSrc)} alt='brands-logo' />
        </a>
      </Link>
    </div>
  );
}

export default LogoItem;