import React from 'react';
import Link from "next/link";
import { prefixer } from '../../utils'

function LogoItem(props) {
  return (
    <div className="brand-logo-item">
      <Link href={`${prefixer(props.URL)}`}>
        <a>
          <img src={prefixer('/img/' + props.logoSrc)} alt="Bluewolf-Logo" />
        </a>
      </Link>
    </div>
  );
}

export default LogoItem;