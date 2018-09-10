import React from 'react';

class ToTop extends React.Component {
  
  handleToTop = () => {
    // 页面高度
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    let timer = null;
    timer = setInterval(() => {
      // 当前距离顶部高度
      const osTop = parseInt(document.documentElement.scrollTop || document.body.scrollTop, 10);
      const speed = 4;
      const scrollDistance = Math.floor(-osTop / speed)
      const nowDistance = osTop + scrollDistance;
      console.log(scrollDistance)
      document.documentElement.scrollTop = document.body.scrollTo = nowDistance;
      if(scrollDistance + scrollDistance === 0) clearInterval(timer)
    }, 30)
  }

  render() {
    const { isDisplay=false } = this.props;

    return (
      <div className={isDisplay ? 'wraper display' : 'wraper'} onClick={this.handleToTop}>
        <div className="toTop">^</div>
        <style jsx>{`
          div.wraper {
            cursor: pointer;
            transition: 300ms all ease;
            position: fixed;
            right: 30px;
            bottom: -30px;
          }
          div.display {
            bottom: 30px;
          }
          div.toTop {
            width: 24px;
            height: 24px;
            background-color: #222;
            color: #fff;
          }
        `}</style>
      </div>
    )
  }
}

export default ToTop;