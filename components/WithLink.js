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
    const { href, children, className, as, style, ...rest } = this.props;
    if(isLink(href)) {
      return <Link prefetch href={href} as={as}><a className={className} style={style} {...rest}>{children}</a></Link>
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