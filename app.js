const express = require('express');
const app = express();
const port = 3000;


app.set('view engine', 'ejs');


app.use(express.static('public'));


const profiles = {
    profile1: {
        name: 'John Doe',
        age: 28,
        gender: 'Male',
        profession: 'Software Developer',
        bio: 'A passionate developer with skills in Node.js and JavaScript',
        skills: ['Node.js', 'JavaScript', 'HTML', 'CSS', 'React', 'Tailwind CSS'],
        hobbies: ['Cricket', 'Gaming', 'Sketching'],
        profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkOU3yL9CFx98fyamRmdupauaeGD47AJbLM2fo5ak7loZO5kGLKYMICNpzR_efNdFVFQs&usqp=CAU',
    },
    profile2: {
        name: 'Jane Smith',
        age: 30,
        gender: 'Female',
        profession: 'Graphic Designer',
        bio: 'Creative designer with a love for art and visual communication.',
        skills: ['Photoshop', 'Illustrator', 'Figma', 'InDesign'],
        hobbies: ['Painting', 'Traveling', 'Photography'],
        profileImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Scarlett_Johansson_as_Black_Widow.jpg/220px-Scarlett_Johansson_as_Black_Widow.jpg',
    },
    profile3: {
        name: 'Alice Johnson',
        age: 25,
        gender: 'Male',
        profession: 'Data Scientist',
        bio: 'Data enthusiast with a knack for analytics and machine learning.',
        skills: ['Python', 'R', 'SQL', 'Machine Learning'],
        hobbies: ['Reading', 'Hiking', 'Cooking'],
        profileImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg',
    },
    profile4: {
        name: 'Bob Brown',
        age: 35,
        gender: 'Male',
        profession: 'Project Manager',
        bio: 'Experienced project manager with a focus on agile methodologies.',
        skills: ['Agile', 'Scrum', 'Team Leadership', 'Communication'],
        hobbies: ['Running', 'Gaming', 'Blogging'],
        profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBPIRNAn9q9rbnd0s7zvfjIlVETs_Utf700A&s',
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
