import React, { useState, FC } from "react"
import { makeid } from "../../components/Common/functions"
import { isMobile } from "react-device-detect"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
import flags from "react-phone-number-input/flags"
import send from "../../assets/images/sumra/send.svg"
import user from "../../assets/images/sumra/user.svg"
import benefits from "../../assets/images/sumra/Benefits_draft.svg"
import { Link } from "react-router-dom"
import { withAuthMain } from "../../components/hoc/withAuthMain"
import { socialLinks } from "../../common/data/socialLinks"
import { useDispatch } from "react-redux"
import { sendCode } from "../../store/auth/actions"
import ConfirmForm from "./ConfirmForm"

type PropsType = {
  className:string
}

const FirstForm:FC<PropsType> = ({ className }) => {
  const [phone, setPhone] = useState("")
  const dispatch = useDispatch()

  const changePhoneNumber = e => {
    setPhone(e)
  }

  /**
   * _goToVeryfycationCodePage
   */
  const goToVeryfycationCodePage = () => {

    return <ConfirmForm />
  }

  const submitPhoneNumber = event => {
    event.preventDefault()

    if (!phone) {
      return
    }

    const phoneNumber = phone.replace("+", "")

    dispatch(
      sendCode({
        phone_number: phoneNumber,
        device_id: makeid(20),
      })
    )

    window.location.href = "/confirm"
  }
  const links = socialLinks.map((v, index) => {
    let href = ""
    if (isMobile) {
      href = v.hrefMobile
    } else {
      href = v.href
    }
    return (
      <li key={index} onClick={goToVeryfycationCodePage}>
        <a href={href} target="_blank" rel="noreferrer">
          <img src={v.image} width={46} alt="social links" />
        </a>
      </li>
    )
  })

  return (
    <div className={className}>
      <h1 className="h1-title">Wellcome to Ultainfinity</h1>
      <h2 className="h2-subtitle">Please Login or Sign Up</h2>
      <section>
        <h3 className="h3-label">Sign up with:</h3>

        <ul className="sumra-social-links">{links}</ul>
      </section>
      <div className="sumra-line"></div>
      <section>
        <h3 className="h3-label">Sign up with:</h3>
        <form>
          <fieldset className="sumra-phone-fieldset">
            <legend>Your mobile phone number</legend>

            <PhoneInput
              flags={flags}
              placeholder="Enter phone number"
              value={phone}
              onChange={changePhoneNumber}
            />

            <div className="sumra-phone-send" onClick={submitPhoneNumber}>
              <img src={send} alt="send" />
            </div>
          </fieldset>
        </form>
      </section>
      <div className="sumra-line"></div>
      <Link to="/login">
        <div className="sumra-Button">
          <img src={user} width="14" height="17" alt="user" />
          <span>Login with Sumra ID</span>
        </div>
      </Link>

      <img className="sumra-Benefits-draft" src={benefits} alt="benefits" />
    </div>
  )
}

export default withAuthMain(FirstForm)
