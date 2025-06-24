import certificateImage from '../assets/png/download.png';
import certificateImage2 from '../assets/png/cert2.jpeg';
import certificateImage3 from '../assets/png/cert3.png';
import certificateImage4 from '../assets/png/cert4.png';

export const achievementData = {
    bio : "Putting quantified achievements on a resume is great, but I just don’t work with hard numbers. I have no data to support the quality of my work. If you have lots of relevant experience, the heading statement of your resume will be a summary.",
    achievements : [
         {
            id : 1,
            title : 'Post Graduate Program in Full Stack Software Engineering',
            details : 'Trained in Java, Spring Boot, Angular, and full-stack development practices through hands-on projects and assessments reviewed by NIIT’s Academic Council.',
            date : 'Sep 5, 2022',
            field : 'Full Stack Dev',
            image : certificateImage3
        },
            {
            id : 2,
            title : 'Data Science Bootcamp',
            details : 'Gained hands-on skills in Python, data analysis, machine learning, statistics, data visualization, and real-world project implementation through the Data Science Bootcamp.',
            date : 'May 16, 2024',
            field : 'Data Science',
            image : certificateImage2
        },
        {
            id : 3,
            title : 'Problem Solving (Basic) Certificate',
            details : 'It covers basic topics of Data Structures (such as Arrays, Strings) and Algorithms (such as Sorting and Searching).',
            date : 'June 16, 2025',
            field : 'Algorithms',
            image : certificateImage
        },
            {
            id : 4,
            title : ' Python Developer: Python/Django/Flask/PostgreSQL/MySQL/API',
            details : 'Gained hands-on experience in backend development using Python, Django, Flask, PostgreSQL, MySQL, and RESTful APIs',
            date : 'Oct 05, 2021',
            field : 'Python Dev',
            image : certificateImage4
        },

    ]
}


// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/