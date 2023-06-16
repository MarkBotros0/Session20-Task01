import React, { useEffect, useState } from 'react'
import Cards from './components/Cards'
import Header from './components/Header.js'

const Home = () => {

    const myData = [
        { id: 0, featured: true, new: true, title: "Photosnap", img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQCy91cU4g2SzCjic4VzB2F_EzyIt51FNu5swkx2bdgnV7fCIbc", position: "Senior Frontend Developer", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos autem animi dicta cumque optio earum temporibus. Voluptate, nobis! Quas asperiores consectetur provident qui necessitatibus hic repellat nisi dignissimos dicta odit, ratione ullam expedita culpa quo vitae fugit cumque excepturi beatae?", createdOn: "1d ago", enrollment: "Full Time", place: "USA Only", filters: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"] },
        { id: 1, featured: true, new: true, title: "Manage", img: "https://www.shell.com/etc.clientlibs/settings/wcm/designs/shell-rio/clientlibs/themes/theme-shell/resources/logo/logo.svg", position: "Fullstack Develorper", desc: "", createdOn: "1d ago", enrollment: "Full Time", place: "USA Only", filters: ["Fullstack", "Midweight", "Python", "React"] },
        { id: 2, featured: false, new: true, title: "Account", img: "https://seeklogo.com/images/B/business-company-logo-C561B48365-seeklogo.com.png", position: "Junior Frontend Developer", desc: "", createdOn: "2d ago", enrollment: "Part Time", place: "USA Only", filters: ["Frontend", "Junior", "React", "Sass", "JavaScript"] },
        { id: 3, featured: false, new: false, title: "MyHome", img: "https://seeklogo.com/images/T/tech-n-letter-company-logo-861CC5B8EC-seeklogo.com.png", position: "Junior Frontend Developer", desc: "", createdOn: "5d ago", enrollment: "Contract", place: "USA Only", filters: ["Frontend", "Junior", "CSS", "JavaScript"] },
        { id: 4, featured: false, new: false, title: "Loop Studios", img: "https://logowik.com/content/uploads/images/256_s_letter_logo.jpg", position: "Software Engineer", desc: "", createdOn: "1w ago", enrollment: "Full Time", place: "Worldwide", filters: ["Fullstack", "Midweight", "JavaScript", "Sass", "Ruby"] },
        { id: 5, featured: false, new: false, title: "Faceit", img: "https://img.freepik.com/free-vector/gradient-gg-logo-template_23-2149245215.jpg?w=2000", position: "Senior FrontEnd Developer", desc: "", createdOn: "2w ago", enrollment: "Full Time", place: "UK Only", filters: ["Backend", "Junior", "Ruby", "RoR"] },
        { id: 6, featured: false, new: false, title: "Shotly", img: "https://img.freepik.com/premium-vector/mhl-hlm-hml-logo-sign-design_594430-196.jpg", position: "Junior Developer", desc: "", createdOn: "1w ago", enrollment: "Full Time", place: "Worldwide", filters: ["Frontend", "Junior", "HTML", "Sass", "JavaScript"] },
        { id: 7, featured: false, new: false, title: "Insure", img: "https://img.freepik.com/premium-vector/letter-ba-company-logo-design-vector_626969-632.jpg?w=2000", position: "Junior Frontend Developer", desc: "", createdOn: "1w ago", enrollment: "Full Time", place: "USA Only", filters: ["Frontend", "Junior", "Vue", "JavaScript", "Sass"] },
        { id: 8, featured: false, new: false, title: "Eyecam Co.", img: "https://img.freepik.com/premium-vector/company-logo-design_697972-244.jpg", position: "Senior Frontend Developer", desc: "", createdOn: "1w ago", enrollment: "Full Time", place: "Worldwide", filters: ["Fullstack", "Midweight", "JavaScript", "Django", "Python"] },
        { id: 9, featured: false, new: false, title: "The Air Filter Company", img: "https://img.freepik.com/premium-vector/am-logo-design-vector_705052-363.jpg?w=2000", position: "Frontend Developer", desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit animi aperiam magni a, recusandae assumenda, velit facilis nesciunt eaque blanditiis eius tempora quia corporis delectus consequuntur facere quo. Consequuntur, eius.", createdOn: "1mo ago", enrollment: "Part Time", place: "Worldwide", filters: ["Frontend", "Junior", "React", "Sass", "JavaScript"] }
    ]

    const [data, setData] = useState(myData)
    const [filteredData, setFilteredData] = useState(myData)
    const [filters, setFilters] = useState([])

    const addFilter = (filter) => {
        if (!filters.includes(filter)) {
            setFilters([...filters, filter])
        }
    }

    const filterData = () => {
        setFilteredData(data.filter(obj => filters.every(name => obj.filters.includes(name))))
    }

    useEffect(() => {
        if (filters.length) {
            filterData()
        }
    }, [filters])

    const removeFilter = (filter) => {
        const array = filters
        const index = array.indexOf(filter);
        array.splice(index, 1)
        setFilters(array)
        filterData()
    }

    const removeAllFilters = () => {
        setFilters([])
        setFilteredData(data)
    }

    return (
        <div className='app'>
            <div className='top-bg'></div>
            <div className="container">
                <Header removeAllFilters={removeAllFilters} removeFilter={removeFilter} filters={filters} />
                <Cards addFilter={addFilter} data={filteredData} />
            </div>
        </div>
    )
}

export default Home