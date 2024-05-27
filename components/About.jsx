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
                <div className='flex flex-col xl:flex-row'>
                    {/* image */}
                    <div className='hidden xl:flex flex-1 relative'>
                        <DevImg containerStyles='w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/about/avatar.png' />
                    </div>
                    {/* tabs */}
                    <div className='flex-1'>
                        <Tabs defaultValue='personal'>
                            <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>¿Quién soy?</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Experiencia</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Habilidades</TabsTrigger>
                            </TabsList>
                            {/* tabs content */}
                            <div className='text-lg mt-12 xl:mt-8'>
                                {/* personal */}
                                <TabsContent value='personal'>
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-4'>Información personal</h3>
                                        <p className='subtitle max-w-xl max-auto xl:mx-0'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus delectus expedita, ducimus saepe voluptatem dignissimos esse, quos recusandae minus sapiente dolore porro dolorum molestias. Ut dolorem optio cupiditate rerum doloremque!
                                        </p>
                                        {/* icons */}
                                        <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                            {infoData.map((item, index) => {
                                                return (
                                                    <div
                                                        className='flex items-center gap-x-4 mx-auto xl:mx-0'
                                                        key={index}
                                                    >
                                                        <div className='text-primary'>{item.icon}</div>
                                                        <div>{item.text}</div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        {/* languages */}
                                        <div className='flex flex-col gap-y-2'>
                                            <div className='text-primary'>Idiomas</div>
                                            <div className='border-b border-border'></div>
                                            <div>Español - Nativo</div>
                                            <div>Inglés - Intermedio</div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* qualifications */}
                                <TabsContent value='qualifications'>
                                    qualifications info
                                </TabsContent>
                                <TabsContent value='skills'>skills info</TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;