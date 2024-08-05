const routeToSendEmail = `http://localhost:3000/api/email/SendEmailOfContactUs`;

function submitContactUsForm(event) 
{
    event.preventDefault(); 
    
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const mobileNumber = document.getElementById('mobileNumberInput').value;
    const subject = document.getElementById('subjectInput').value;
    const message = document.getElementById('messageInput').value;
    
    const emailHTML = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta name="viewport" content="width=device-width" />
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
                    *{
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                        text-decoration: none;
                        border: none;
                        outline: none;
                        scroll-behavior: smooth;
                        font-family: 'Poppins', sans-serif;
                    }
                    :root
                    {
                        --bg-color: #081b29;
                        --second-bg-color: #112e42;
                        --text-color: #ededed;
                        --main-color: #00abf0;
                    }
                    html
                    {
                        font-size: 52.5%;
                        overflow-x: hidden;
                    }
                    body
                    {
                        background: var(--bg-color);
                        color: var(--text-color);
                    }
                    /* Scrolbar */
                    ::-webkit-scrollbar 
                    {
                        width: 5px;
                    }
                    ::-webkit-scrollbar-track 
                    {
                        background: var(--text-color);
                    }
                    ::-webkit-scrollbar-thumb 
                    {
                        background: var(--main-color);
                    }
                    /* Header */
                    .header
                    {
                        top: 0;
                        left: 0;
                        width: 100%;
                        padding: 2rem 9%;
                        background: transparent;
                        border-bottom: var(--main-color) 1px solid;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        z-index: 100;
                        transition: .3s;
                    }
                    .header.sticky{
                        background: var(--bg-color);
                    }
                    .logo{
                        position: relative;
                        font-size: 2.5rem;
                        color: var(--text-color);
                        font-weight: 600;
                    }
                    .navbar
                    {
                        position: relative;
                    }
                    .navbar a
                    {
                        font-size: 1.7rem;
                        color: var(--text-color);
                        font-weight: 500;
                        margin-left: 3.5rem;
                        transition: .3s;
                    }
                    .navbar a:hover,
                    .navbar a.active
                    {
                        color: var(--main-color);
                    }
                    #menu-icon
                    {
                        position: relative;
                        font-size: 3.6rem;
                        color: var(--text-color);
                        cursor: pointer;
                        display: none;
                    }
                    section
                    {
                        min-height: 100vh;
                        padding: 10rem 9% 2rem;
                    }
                    .contact
                    {
                        min-height: auto;
                        padding-bottom: 7rem;
                    }
                    .contact h2
                    {
                        display: inline-block;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                    .contact form
                    {
                        max-width: 70rem;
                        margin: 0 auto;
                        text-align: center;
                    }
                    .contact form .input-box
                    {
                        position: relative;
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: wrap;
                    }
                    .contact form .input-box .input-field
                    {
                        position: relative;
                        width: 49%;
                        margin: .8rem 0;
                    }
                    .contact form .input-box .input-field input,
                    .contact form .textarea-field textarea
                    {
                        width: 100%;
                        height: 100%;
                        padding: 1.5rem;
                        font-size: 1.6rem;
                        color: var(--text-color);
                        background: transparent;
                        border-radius: .6rem;
                        border: .2rem solid var(--main-color);
                    }
                    .contact form .input-box .input-field input::placeholder,
                    .contact form .textarea-field textarea::placeholder
                    {
                        color: var(--text-color);
                    }
                    .contact form .focus
                    {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 0;
                        height: 100%;
                        background: var(--second-bg-color);
                        border-radius: .6rem;
                        z-index: -1;
                        transition: .5s;
                    }
                    .contact form .input-box .input-field input:focus~.focus,
                    .contact form .input-box .input-field input:valid~.focus,
                    .contact form .textarea-field textarea:focus~.focus,
                    .contact form .textarea-field textarea:valid~.focus
                    {
                        width: 100%;
                    }
                    .contact form .textarea-field
                    {
                        position: relative;
                        margin: .8rem 0 2.7rem;
                        display: flex;
                    }
                    .contact form .textarea-field textarea
                    {
                        resize: none;
                    }
                    .contact form .btn-box.btns .btn
                    {
                        cursor: pointer;
                    }
                    .animate
                    {
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 100%;
                        height: 100%;
                        background: var(--bg-color);
                        z-index: 98;
                    }
                    .logo .animate,
                    .navbar .animate,
                    #menu-icon .animate,
                    .home.show-animate .animate,
                    .project.show-animate .animate
                    {
                        animation: showRight 1s ease forwards;
                        animation-delay: calc(.3s * var(--i));
                    }
                    .animate.scroll
                    {
                        transition: 1s ease;
                        transition-delay: calc(.3s / var(--i));
                        animation: none;
                    }
                    section:nth-child(odd) .animate.scroll,
                    .footer .animate.scroll
                    {
                        background: var(--second-bg-color);
                    }
                    .education .education-box .animate.scroll
                    {
                        width: 105%;
                    }
                    .about.show-animate .animate.scroll,
                    .education.show-animate .animate.scroll,
                    .skills.show-animate .animate.scroll,
                    .contact.show-animate .animate.scroll,
                    .footer.show-animate .animate.scroll
                    {
                        transition-delay: calc(.3s * var(--i));
                        width: 0;
                    }

                    .heading
                    {
                        position: relative;
                        font-size: 5rem;
                        margin-bottom: 3rem;
                        text-align: center;
                    }

                    span
                    {
                        color: var(--main-color);
                    }

                    .btn-box
                    {
                        position: relative;
                        display: flex;
                        justify-content: space-between;
                        width: 34.5rem;
                        height: 5rem;
                    }
                    .btn-box .btn
                    {
                        position: relative;
                        display: inline-flex;
                        justify-content: center;
                        align-items: center;
                        width: 15rem;
                        height: 100%;
                        background: var(--main-color);
                        border: .2rem solid var(--main-color);
                        border-radius: .8rem;
                        font-size: 1.8rem;
                        font-weight: 600;
                        letter-spacing: .1rem;
                        color: var(--bg-color);
                        z-index: 1;
                        overflow: hidden;
                        transition: .5s;
                        cursor: pointer;
                    }

                    .btn-box .btn::before
                    {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 0;
                        height: 100%;
                        background: var(--bg-color);
                        z-index: -1;
                        transition: .5s;
                    }
                    .btn-box .btn:hover::before
                    {
                        width: 100%;
                    }
                    .btn-box .btn:hover
                    {
                        color: var(--main-color);
                    }

                    .btn-box.btns{
                        display: inline-block;
                        width: 15rem;
                    }
                    .btn-box.btns a::before{
                        background: var(--second-bg-color);
                    }

                    @media (max-width: 1200px)
                    {
                        html
                        {
                            font-size: 55%;
                        }
                    }
                    @media (max-width: 991px)
                    {
                        .header
                        {
                            padding: 2rem 4%;
                        }
                        section
                        {
                            padding: 10rem 4% 2rem;
                        }
                    }
                    @media (max-width: 768px)
                    {
                        .header
                        {
                            background: var(--bg-color);
                        }
                        #menu-icon
                        {
                            display: block;
                        }
                        .navbar
                        {
                            position: absolute;
                            top: 100%;
                            left: -100%;
                            width: 100%;
                            padding: 1rem 4%;
                            background: var(--main-color);
                            box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .2);
                            z-index: 1;
                            transition: .25s ease;
                            transition-delay: .25s;
                        }
                        .navbar.active
                        {
                            left: 0;
                            transition-delay: 0s;
                        }
                        .navbar .active-nav
                        {
                            position: absolute;
                            top: 0;
                            left: -100%;
                            width: 100%;
                            height: 100%;
                            background: var(--bg-color);
                            border-top: .1rem solid rgba(0, 0, 0, .2);
                            z-index: -1;
                            transition: .25s ease;
                            transition-delay: .25s;
                        }
                        .navbar.active .active-nav
                        {
                            left: 0;
                            transition-delay: .25s;
                        }
                        .navbar a
                        {
                            display: block;
                            font-size: 2rem;
                            margin: 3rem 0;
                            transform: translate(-20rem);
                        }
                        .navbar.active a
                        {
                            transform: translate(0);
                            transition-delay: .25s;
                        }
                    }
                    @media (max-width: 768px)
                    {
                        html
                        {
                            font-size: 50%;
                        }
                    }
                    @media (max-width: 462px)
                    {
                        .contact form .input-box .input-field
                        {
                            width: 100%;
                        }
                    }

                    /* KEYFRAMES ANIMATIONS */
                    @keyframes homeBgText{
                        0%, 10%, 100%{
                            background-position: -33rem 0;
                        }
                        65%, 85%{
                            background-position: 0 0;
                        }
                    }
                    @keyframes homeCursorText{
                        0%, 10%, 100%{
                            width: 0;
                        }
                        65%, 78%, 85%{
                            width: 100%;
                            opacity: 1;
                        }
                        75%, 81%{
                            opacity: 0;
                        }
                    }
                    @keyframes aboutSpinner{
                        100%{
                            transform: translate(-50%, -50%) rotate(360deg);
                        }
                    }
                    @keyframes showRight{
                        100%{
                            width: 0;
                        }
                    }
                </style>
            </head>
            <body>
                <header class="header">
                    <a href="#Home" class="logo">muawwaznc.<span class="animate" style="--i:1;"></span></a>
                    <div class="bx bx-menu" id="menu-icon"><span class="animate" style="--i:2;"></span></div>
                    <nav class="navbar">
                        <a href="https://www.upwork.com/freelancers/muawwaznc" target="_blank"><i style="font-size: 25px;" class='bx bxl-upwork'></i></a>
                        <a href="https://www.linkedin.com/in/muawwaznc/" target="_blank"><i style="font-size: 25px;" class='bx bxl-linkedin'></i></a>
                        <a href="https://github.com/muawwaznc" target="_blank"><i style="font-size: 25px;" class='bx bxl-github'></i></a>

                        <span class="active-nav"></span>
                        <span class="animate" style="--i:2;"></span>
                    </nav>
                </header>

                <section class="contact show-animate" id="contact">
                    <h2 class="heading">${name}<span> Contacts!</span><span class="animate scroll" style="--i:1;"></span></h2>
                    
                    <form>
                        <div class="input-box">

                            <div class="input-field">
                                <input value="${email}" type="text" readonly>
                                <span class="focus"></span>
                            </div>

                            <div class="input-field">
                                <input value="${mobileNumber}" type="text" readonly>
                                <span class="focus"></span>
                            </div>

                            <span class="animate scroll" style="--i:3;"></span>
                        </div>

                        <div class="textarea-field">
                            <textarea type="text" readonly cols="30" rows="10">${message}</textarea>
                            <span class="focus"></span>
                            <span class="animate scroll" style="--i:7;"></span>
                        </div>

                        <div class="btn-box btns">
                            <a href="mailto:${email}" type="submit" class="btn">Reply</a>
                            <span class="animate scroll" style="--i:9;"></span>
                        </div>
                    </form>
                </section>
            </body>
            </html>
    `;
    sendEmailOfContactUs(email, subject, emailHTML);
}

async function sendEmailOfContactUs(fromEmail, emailSubject, emailHtmlBody) 
{    
    const data = {
        fromEmail: fromEmail,
        emailSubject: emailSubject,
        emailBody: emailHtmlBody
    };
    try
    {
        const response = await axios.post(routeToSendEmail, data);
        if (response.status === 201) 
        {
            alert('Email sent successfully');
        }
        else
        {
            console.log(response);
            alert('Failed to send email');
        }
    }
    catch(error)
    {
        console.log(error);
        alert('Error:', error);
    }
    //location.reload();
}