import React from 'react'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-light has-text-grey">
        <div className="container center">
          <h2 className="is-size-1 is-uppercase">Registration form</h2>
          <hr/>
          <h4 className="is-size-6 is-uppercase is-8">Feel free to send us a message or ask a question.</h4>
          <div className="columns">
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
            <li><a className="icon icon-creative novi-icon fa fa-google-plus" href="#"></a></li>
            <li><a className="icon icon-creative novi-icon fa fa-pinterest" href="#"></a></li>
            <li><a className="icon icon-creative novi-icon fa fa-twitter" href="#"></a></li>
            <li><a className="icon icon-creative novi-icon fa fa-facebook" href="#"></a></li>
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
