import React from 'react';
import { navigate } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <section>
      <h2>Contact</h2>
      <form
        name="contact"
        method="post"
        action="#"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="fields">
          <div className="field half">
            <input type="text" name="name" id="name" placeholder="Name" onChange={handleChange}/>
          </div>
          <div className="field half">
            <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange}/>
          </div>
          <div className="field">
            <textarea name="message" id="message" placeholder="Message" onChange={handleChange}/>
          </div>
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Send" className="primary" />
          </li>
        </ul>
      </form>
    </section>
  );
}
