import Image from "next/image"

import Swal from "sweetalert2"

/* images */
import MissionImage from "../../public/images/mission.jpg"
import VisionImage from "../../public/images/vision.jpg"

export default function Index() {

    /* Alerts */
    /* join us */
    const joinUs = () => {
        Swal.fire({
            title: "Contact the Administration!",
            html: 
            `
                <h2>‪+260 97 884 7195‬ | ‪+260 97 889 8985</h2>
                <b>Join Us Now!</b>
            `,
            icon: "success"
        });
    }
    /* get started */
    const getStarted = () => {
        Swal.fire({
            title: "Website Under Maintenance",
            text: "Contact Administration",
            icon: "warning"
        });
    }

    return (
        <>
            <div className="banner">
                <h1 className="text-5xl">Welcome to Learning Impact Zambia (LIZ)</h1>
                <h2 className="py-5">Measuring Learning, Igniting Progress</h2>
                <button className="px-3 py-2 bg-yellow-400 text-gray-900 rounded cursor-pointer" onClick={getStarted}>Get Started With Us</button>
            </div>

            {/* about us */}            
            <section id="about-us">
                <h1 className="text-center">About Us</h1>
                <p>
                    Learning Impact Zambia (LIZ) is dedicated to improving primary education across Zambia, especially in underserved communities. We focus on monitoring learning outcomes, providing high-quality learning materials, supporting teachers, fostering international knowledge exchange, and addressing poverty-related barriers that prevent children from accessing education.
                </p>
            </section>

            {/* vision and mission */}
            <section className="mission-vision w-full bg-gray-800 text-gray-200">

                <div className="our-mission flex flex-row-reverse justify-around flex-wrap mb-10" id="our-mission">
                    <div className="text flex flex-col justify-center w-2xl">
                        <h1>Our Mission</h1>
                        <p>
                            To enhance primary education by delivering independent learning assessments, effective teaching resources, comprehensive teacher support, and targeted poverty interventions to ensure equitable learning opportunities for all children.
                        </p>
                    </div>
                    <div className="image-div max-w-1/3 justify-center">
                        <Image src={MissionImage} alt="mission-image" className="image" />
                    </div>
                </div>

                <div className="our-vision flex flex-row justify-around flex-wrap" id="our-vision">
                    <div className="text flex flex-col justify-center w-2xl">
                        <h1>Our Vision</h1>
                        <p>
                            A Zambia where every child thrives with strong literacy and numeracy skills, supported by excellent teachers and a learning environment free from poverty barriers.
                        </p>
                    </div>
                    <div className="image-div max-w-1/3 justify-center">
                        <Image src={VisionImage} alt="vision-image" className="image"/>
                    </div>
                </div>
            </section>

            {/* why we exist */}
            <section className="py-4">
                <h1 className="text-center">Why We Exist</h1>
                <p>
                    Despite improvements in school enrollment, most children in Zambia still struggle to read and do basic math by the end of primary school. Many face poverty-related challenges like lack of school supplies, nutrition, and menstrual hygiene support, especially in rural areas. LIZ exists to address these issues with a holistic approach — combining learning assessments, teaching support, and poverty alleviation — to ensure every child can succeed.
                </p>
            </section>

            {/* core values */}
            <section id="our-core-values">
                <h1 className="text-center">Our Core Values</h1>
                <ol>
                    <li><strong>Integrity:</strong> We uphold honesty and transparency.</li>
                    <li><strong>Excellence:</strong> We strive for the highest quality in everything we do.</li>
                    <li><strong>Collaboration:</strong> We work respectfully with communities, schools, and partners.</li>
                    <li><strong>Impact-Driven:</strong> We focus on measurable improvements.</li>
                    <li><strong>Empowerment:</strong> We build capacity for teachers and learners.</li>
                    <li><strong>Equity:</strong> We prioritize the most vulnerable and underserved.</li>
                    <li><strong>Innovation:</strong> We embrace creative, evidence-based solutions.</li>
                    <li><strong>Sustainability:</strong> We promote lasting change beyond external support.</li>
                </ol>
            </section>

            {/* join us */}
            <section className="join-us text-center m-auto">
                <div className="">
                    <h1>Get Involved</h1>
                    <p> 
                        In transforming education in Zambia. Whether you are a donor, partner, teacher, or community member, your support can make a real difference.
                    </p>
                </div>
                <button className=" py-3 px-10 text-gray-200 rounded mt-5 bg-red-500 cursor-pointer hover:bg-red-400 transition" onClick={joinUs}>Join Us</button>
            </section>
        </>
    )
}