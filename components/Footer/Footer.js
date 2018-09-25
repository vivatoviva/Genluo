import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const style = {
  marginRight: '5px'
}
export default () =>
  <div>
    <p><FontAwesomeIcon icon="copyright" style={style}/> 2018 | <FontAwesomeIcon icon="user" style={style} />Genluo</p>
    <style jsx>{`
      p {
        text-align: center;
        line-height: 2;
        color: #999;
      }
    `}</style>
  </div>