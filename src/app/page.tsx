'use client';

import LocationCard from '@/app/_components/LocationCard';
import { Button, SimpleGrid, Text, VStack } from '@/common/chakra';
import { gql, useQuery } from '@apollo/client';

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

const Home = () => {
  const FetchComp = () => {
    const { data, loading, error } = useQuery(GET_LOCATIONS);
    if (loading) return <>loading</>;
    if (error) return <>error</>;
    if (!data) return <>no data</>;
    return (
      <SimpleGrid columns={3} spacing="8px" mt="40px">
        {data.locations.map((location: any) => (
          <LocationCard key={location.id} name={location.name} description={location.description} />
        ))}
      </SimpleGrid>
    );
  };

  return (
    <VStack w="100vw" h="100vh" justify="center" spacing="16px">
      <Text fontWeight="bold" fontSize="4xl">
        こんにちは
      </Text>
      <Button
        size="sm"
        colorScheme="green"
        onClick={() => {
          alert('こんにちは Hello World!');
        }}
      >
        こんにちはボタン
      </Button>

      <FetchComp />
    </VStack>
  );
};

export default Home;
