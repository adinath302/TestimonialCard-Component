import React from 'react'
import Tcard from './Tcard';

const people = [
    {
        id: 1,
        name: "Aisha Khan",
        role: "UI/UX Designer",
        message:
            "The platform was a game changer for me. It helped me organize my design process, collaborate better with developers, and save a lot of time during handoffs. I highly recommend it to every creative professional looking to streamline their workflow.",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: 2,
        name: "Rohan Mehta",
        role: "Full Stack Developer",
        message:
            "Using this tool daily has boosted my productivity by 3x. The seamless integration with our tech stack and the intuitive UI makes it stand out. It's now a crucial part of my development workflow.",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 3,
        name: "Priya Deshmukh",
        role: "Product Manager",
        message:
            "As a product manager, communication between design, dev, and marketing is key. This platform created a central source of truth for all teams. We’ve seen major improvements in alignment and delivery speed.",
        image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        id: 4,
        name: "Arjun Patel",
        role: "Digital Marketer",
        message:
            "I use this platform to plan and execute campaigns, track performance, and report results. It has cut down our turnaround time by half and made team coordination effortless.",
        image: "https://randomuser.me/api/portraits/men/54.jpg"
    }
];

const Testimonials = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 m-10'>
            {people.map((item) => {
                return (

                    <Tcard key={item.id} name={item.name} role={item.role} message={item.message} image={item.image} />

                )
            })
            } </div>
    )
}

export default Testimonials