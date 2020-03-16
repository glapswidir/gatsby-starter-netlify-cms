import React               from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGoogle,
  faFacebook,
  faTwitter,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-light is-uppercase">
        <div className="container center">
          <h2 className="is-size-2">Registration form</h2>
          <hr/>
          <h4 className="is-size-6 is-8 has-text-grey">Feel free to send us a message or ask a question.</h4>
          <div className="columns offset-custom-2">
            <div className="column is-half">
              <div className="field">
                <div className="control">
                  <input className="input is-medium" type="text" placeholder="Name"/>
                </div>
              </div>
            </div>
            <div className="column is-half">
              <div className="field">
                <div className="control">
                  <input className="input is-medium" type="text" placeholder="Surname"/>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-half">
              <div className="field">
                <div className="control">
                  <input className="input is-medium" type="text" placeholder="Medium input"/>
                </div>
              </div>
            </div>
            <div className="column is-half">
              <div className="field">
                <div className="control">
                  <input className="input is-medium" type="text" placeholder="Medium input"/>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-full">
              <div className="field">
                <div className="control">
                  <textarea className="textarea is-medium" placeholder="Medium textarea"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="form-button group-sm text-center are-medium">
            <span/>
            <button className="button button-primary" type="submit">Send</button>
            <span/>
            <button className="button button-default" type="reset">Clear</button>
          </div>
          <ul className="inline-list">
            <li>
              <FontAwesomeIcon icon={faGoogle} className="icon icon-creative novi-icon"/>
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} className="icon icon-creative novi-icon" />
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebook} className="icon icon-creative novi-icon"/>
            </li>
            <li>
              <FontAwesomeIcon icon={faPinterest} className="icon icon-creative novi-icon"/>
            </li>
          </ul>
          <div className="copyright">
            <span>Day nursery centre</span><span>&nbsp;©&nbsp;</span>
            <span className="copyright-year">2020</span>
            <span>.&nbsp;</span>
            <a href="privacy-policy.html">Privacy Policy</a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
