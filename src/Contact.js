const Contact = () => {
  return ( 
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="contact--wrapper">
        <div className="details">
          <p>CONTACT US AND WE'LL GET BACK TO YOU</p>
          <div className="telephone">
            <a href="tel:699444111">Call us</a>
          </div>
          <div className="address">
            <address>
              Koteshwor, KTM
            </address>
          </div>
        </div>
      </div>
      <div className="form">
        <h6>Contact</h6>
        <input type="email" name="email" placeholder = "Enter you email here"/>
         <textarea name="txtarea" cols="30" rows="10" placeholder = 'Message'></textarea>
         <button> Send </button>
      </div>
    </div>
   );
}
 
export default Contact;