const express = require('express');
const app = express();
const port = 3000;


app.set('view engine', 'ejs');


app.use(express.static('public'));


const profiles = {
    profile1: {
        name: 'Aman',
        age: 24,
        gender: 'Male',
        profession: 'Software Developer',
        bio: 'A passionate developer with skills in Node.js and JavaScript',
        skills: ['Node.js', 'JavaScript', 'HTML', 'CSS', 'React', 'Tailwind CSS'],
        hobbies: ['Cricket', 'Gaming', 'Sketching'],
        profileImage: 'https://img.lovepik.com/element/45001/3052.png_860.png',
    },
    profile2: {
        name: 'Anupam',
        age: 21,
        gender: 'Male',
        profession: 'Frontend Developer',
        bio: 'Creative designer with a love for art and visual communication.',
        skills: ['Photoshop', 'Illustrator', 'Figma', 'InDesign'],
        hobbies: ['Painting', 'Traveling', 'Photography'],
        profileImage: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    },
    profile3: {
        name: 'Suryakant',
        age: 25,
        gender: 'Male',
        profession: 'Data Scientist',
        bio: 'Data enthusiast with a knack for analytics and machine learning.',
        skills: ['Python', 'R', 'SQL', 'Machine Learning'],
        hobbies: ['Reading', 'Hiking', 'Cooking'],
        profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7aAvSj7skLyw6VjPqWl0SOMU1Y8zms3Zyv6SCWdzn8BASC4s87yqAVeLdIDdj9g8DII&usqp=CAU',
    },
    profile4: {
        name: 'Shivam',
        age: 35,
        gender: 'Male',
        profession: 'Project Manager',
        bio: 'Experienced project manager with a focus on agile methodologies.',
        skills: ['Agile', 'Scrum', 'Team Leadership', 'Communication'],
        hobbies: ['Running', 'Gaming', 'Blogging'],
        profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj3daRGs0-D_-53eIDqucIZodDyTKE1NCNNOcPl8OnbUYCBwuIDtirvZXudl-GRVfWnsc&usqp=CAU',
    },
};


app.get('/:profileId', (req, res) => {
    const profileId = req.params.profileId;
    const profile = profiles[profileId];

    if (profile) {
        res.render('profile', { profile });
    } else {
        res.status(404).send('Profile not found');
    }
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
