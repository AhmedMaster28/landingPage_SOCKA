import { IoIosArrowRoundForward } from "react-icons/io";
import emailjs from '@emailjs/browser'
const Email = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_zf7c989','template_b2k9cxf',e.target,'tDbzxo2Qmf7RKYjfV')
  }
  return (
    <div className="text-black emailSub">
      <div >
        <form className="emailSub2 d-flex justify-content-between flex-wrap" onSubmit={sendEmail}>
          <input
            type="email"
            className="rounded-xl bg-transparent text-white py-2 px-3 inpEmail"
            name="email-from"
            placeholder="Your Email Address"
          />
          <button type="submit" className="subBtn btn py-2">
            Subscribe <IoIosArrowRoundForward />
          </button>
        </form>
      </div>
      <div className="disDiv">
        <button type="submit" className="subBtn btn  disab">
          Subscribe <IoIosArrowRoundForward />
        </button>
      </div>
      <div
        className="d-flex justify-content-center gap-2 align-items-center text-primary hashtag flex-wrap"
        id="tags"
      >
        <p>#makeachange</p>
        <p>#sockaclub</p>
        <p>#sockswithpurpose</p>
        <p>#supportgrossroot</p>
      </div>
    </div>
  );
};

export default Email;
