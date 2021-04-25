import React, {useState, useEffect} from 'react';
import CustomCard from '../card/card.component';

import './projects.styles.scss';

const Projects = () => {
    const [isLoading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://run.mocky.io/v3/8805761b-450f-4529-bab8-b5bb11b9a2a3')
        .then(response => response.json())
        .then(response => {
            const items = response.map(item => ({...item, image: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'}))
            setItems(items);
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    return (<div className="projects-container">
        {isLoading ? <span>Loading</span>: items.map((item, i) => (<CustomCard key = {i} content={{...item}} />))}
    </div>)
}

export default Projects;