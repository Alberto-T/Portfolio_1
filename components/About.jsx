import DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Briefcase,
    University,
} from 'lucide-react';

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Alberto Torres',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+569 9340 4352',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'alberto.torres.cancino@gmail.com',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Ingeniero en informática',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Santiago, Chile',
    },
];

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                University: 'Duoc UC',
                qualification: 'Ingeniería en informática',
                years: '2019 - 2022',
            }
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'ACL Tecnología',
                qualification: 'Coordinador PPJ',
                years: 'Oct. 2023 - Feb. 2024',
            },
            {
                company: 'ACL Tecnología',
                qualification: 'Trainee en Gestión',
                years: 'Jul. 2023 - Sep. 2023',
            },
            {
                company: 'ACL Tecnología',
                qualification: 'Practicante Analista QA',
                years: 'Abr. 2023 - Jun. 2023',
            },
            {
                company: 'Llegó',
                qualification: 'Practicante TI',
                years: 'Ago. 2022 - Oct.2022',
            },
            {
                company: 'Vaaladev SpA',
                qualification: 'Desarrollador web',
                years: 'Feb. 2022',
            },
        ]
    }
];

const skillData = [
    {
        tittle: 'Skills',
        data: [
            {
                name: 'HTML, CSS',
            },
            {
                name: 'Front-end Development',
            },
            {
                name: 'Javascript, PHP',
            },
            {
                name: 'Back-end Development',
            },
        ],
    },
    {
        tittle: 'Tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            }
            // {
            //     imgPath: '/about/',
            // },
            // {
            //     imgPath: '/about/',
            // },
            // {
            //     imgPath: '/about/',
            // },
        ],
    },
];

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title)
    };

    // console.log(getData(qualificationData));
    return (
        <section className='xl:h-[860px] pb-12 xl:py-24'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
                    About me
                </h2>
            </div>
        </section>
    );
};

export default About;