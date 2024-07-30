import {
    Box,
    Button,
    Heading,
    HStack,
    Image,
    Text,
    VStack,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Card = ({ title, description, imageSrc }) => {
    // Implement the UI for the Card component according to the instructions.
    // You should be able to implement the component with the elements imported above.
    // Feel free to import other UI components from Chakra UI if you wish to.

    return (
        <Box borderRadius="lg" overflow="hidden" bg="white">
            <VStack>
                <Box borderRadius="lg" overflow="hidden">
                    <Image src={imageSrc} alt={title} sizes="md" />
                </Box>
                <Box p="15px">
                    <Heading as="h2" size="md" color="black">
                        {title}
                    </Heading>
                    <Text paddingY="10px" color="black">
                        {description}
                    </Text>
                    <HStack alignContent="center">
                        <Text color="black">Learn More</Text>
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            size="1x"
                            style={{ color: '#000' }}
                        />
                    </HStack>
                </Box>
            </VStack>
        </Box>
    );
};

export default Card;
