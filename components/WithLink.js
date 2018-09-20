import React, { PureComponent } from 'react';
import Link from 'next/link';

// 判断是不是站内链接
const isLink = path => path && (
  typeof path === 'string' &&  !path.includes('http')
)
const isHref = path => path && (
  typeof path === 'string' && path.includes('http')
)

export default class extends PureComponent {
  handleClick = () => {
    const {onClick, clickParams } = this.props;
    if(onClick) {
      onClick(clickParams)
    }
  }

  render() {
    const { href, children, className, as, style, paramsData, ...rest } = this.props;
    if(isLink(href)) {
      return (
        <div>
          <Link
            prefetch
            href={{
              pathname: href,
              query: paramsData
            }}
            as={as}><a className={className} style={style} {...rest}>{children}</a>
          </Link>
          <style jsx>{`
            div {
              width: 100%;
              height: 100%;
            }
              a:hover {
                color: #fff;
              }
              a {
                line-height: 160%;
                height: 100%;
                display: block;
                width: 100%;
                text-decoration-style: none;
                text-decoration-style: none;
              }
            `}</style>
        </div> 
      )
 
    }
    if(isHref) {
      return <a className={className} style={style} {...rest}>{children}</a>;
    }

    return (
      <div
        onClick={this.onClick}
        tabIndex='0'
        role="button"
        onKeyDown={this.handleClick}
        className={className}
        style={style}
      >
        {children}
      </div>
    )
  }
}