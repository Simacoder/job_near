import { useState , useEffect} from "react";

import Banner from "./Banner";

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("jobs.json").then(res => res.json()).then(data => {
            console.log(data)
            setJobs(data)
        })
    }, [])

    console.log(jobs)

    const [query, setQuery] = useState("");
    const handleInputChange = (event) => {
        setQuery(event.target.value)
        //console.log(event.target.value)
    }

    // filter jobs by title
    const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    console.log(filteredItems)


    return(
        <div>
            <Banner query ={query} handleInputChange={handleInputChange} />
        </div>
    )
}

export default Home;