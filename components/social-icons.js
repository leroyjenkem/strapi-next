import { SocialIcon } from 'react-social-icons';

export default function SocialIcons() {
  return (
    <div className="social-icons">
      <ul>
        <li><SocialIcon url="https://linkedin.com/ollilindeman" style={{ height: 33, width: 33 }} /></li>
        <li><SocialIcon url="https://github.com/leroyjenkem" style={{ height: 33, width: 33 }} /></li>
        <li><SocialIcon url="https://stackoverflow.com/users/18023418/leroyjenkem" style={{ height: 33, width: 33 }} /></li>
        <li><SocialIcon url="https://open.spotify.com/user/lucifer.vesper?si=a511382b73fe4751" style={{ height: 33, width: 33 }} /></li>
      </ul>
    </div>
  )
};
