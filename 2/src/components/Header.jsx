import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faLinkedin,
    faInstagram,
    faFacebook,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { Box, HStack } from '@chakra-ui/react';

const socials = [
    {
        icon: faGithub,
        url: 'https://github.com/',
    },
    {
        icon: faLinkedin,
        url: 'https://www.linkedin.com/',
    },
    {
        icon: faInstagram,
        url: 'https://www.instagram.com/',
    },
    {
        icon: faFacebook,
        url: 'https://www.facebook.com/',
    },
    {
        icon: faTwitter,
        url: 'https://www.twitter.com/',
    },
];

const Header = () => {
    const headerRef = useRef(null);
    const [lastScrollPosition, setLastScrollPosition] = useState(0);
    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        console.log(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const handleScroll = () => {
        const currentPosition = document.documentElement.scrollTop;
        if (currentPosition > lastScrollPosition) {
            headerRef.current.style.transform = 'translateY(-200px)';
        } else {
            headerRef.current.style.transform = 'translateY(0)';
        }

        setLastScrollPosition(currentPosition <= 0 ? 0 : currentPosition);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollPosition]);

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#18181b"
            zIndex={1}
            ref={headerRef}>
            <Box color="white" maxWidth="1280px" margin="0 auto">
                <HStack
                    px={16}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center">
                    <nav>
                        <HStack spacing={8}>
                            {socials.map((social) => (
                                <a
                                    key={social.url}
                                    href={social.url}
                                    target="_blank">
                                    <FontAwesomeIcon
                                        icon={social.icon}
                                        size="2x"
                                    />
                                </a>
                            ))}
                        </HStack>
                    </nav>
                    <nav>
                        <HStack spacing={8}>
                            <a
                                onClick={handleClick('projects')}
                                style={{ cursor: 'pointer' }}>
                                Projects
                            </a>
                            <a
                                onClick={handleClick('contactme')}
                                style={{ cursor: 'pointer' }}>
                                Contact Me
                            </a>
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </Box>
    );
};
export default Header;
