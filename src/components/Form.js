import "./Form.css"
function Form(){
    return(
        <form className="form">
                <h4>Contact form</h4>
                <input id="name" type="text" placeholder="Name"/>
                <input id="email" type="text" placeholder="E-mail"/>
                <textarea id="message" type="text" placeholder="Message"></textarea>
                <button onClick={()=>{ alert('Message successfully sent!');}} type="submit"> Send</button>
        </form>

    )

}
export default Form;