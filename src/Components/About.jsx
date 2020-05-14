import React from 'react'
import aboutImg from '../Images/about-side-image.jpg'

export default function About() {
    return (
        <div className="about" id="about">
            <div className="header-title"> About Us</div>
            <div className="about-container">
                <div className="about-image">
                    <img src={aboutImg} alt="About"/>
                </div>
                <div className="about-text-container">
                    <div className="about-category">Category</div>
                    <div className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sequi deleniti temporibus nemo, quidem inventore quas, non excepturi perferendis odio tenetur doloremque eos consectetur qui incidunt aperiam? Facere, neque est!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae assumenda voluptatem aspernatur magni provident id? Quo explicabo qui numquam aliquid! Fugiat distinctio nobis illum quam reprehenderit ad maxime! Accusantium, reiciendis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptas aperiam saepe explicabo ipsam vero velit quidem reiciendis, fugiat voluptates autem alias ipsa labore voluptatem, aliquam repudiandae? Ut, excepturi numquam. </div>
                    
                    <div className="about-category">Category</div>
                    <div className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sequi deleniti temporibus nemo, quidem inventore quas, non excepturi perferendis odio tenetur doloremque eos consectetur qui incidunt aperiam? Facere, neque est!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae assumenda voluptatem aspernatur magni provident id? Quo explicabo qui numquam aliquid! Fugiat distinctio nobis illum quam reprehenderit ad maxime! Accusantium, reiciendis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptas aperiam saepe explicabo ipsam vero velit quidem reiciendis, fugiat voluptates autem alias ipsa labore voluptatem, aliquam repudiandae? Ut, excepturi numquam. </div>
                </div>
            </div>
        </div>
    )
}