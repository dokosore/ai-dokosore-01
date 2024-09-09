import { Card, Text, VStack } from '@/common/chakra';

interface Props {
  name: string;
  description: string;
}

const LocationCard = (props: Props) => {
  return (
    <Card w="200px">
      <VStack p="16px" align="start">
        <Text fontSize="sm" fontWeight="bold">
          {props.name}
        </Text>
        <Text fontSize="xs" wordBreak="break-all" noOfLines={2}>
          {props.description}
        </Text>
      </VStack>
    </Card>
  );
};

export default LocationCard;
