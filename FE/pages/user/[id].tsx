import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { faker } from '@faker-js/faker';
import { GetStaticPaths, GetStaticProps } from 'next';

const User = () => {
  
  const router = useRouter();
  const { id } = router.query;
  
  const [lastName, setLastName] = useState(' ');
  const [firstName, setFirstName] = useState(' ');

  useEffect(() => {
    if (id) {
      setLastName(faker.name.lastName());
      setFirstName(faker.name.firstName());
    }
  }, [id]);
  
  if (router.isFallback) {
    return (
      <div>
       <h1>Loading</h1> 
      </div>
    );
  }
  return (
    <div>
      <h1>User Info: {id}</h1>
      <p>User first name: {firstName}</p>
      <p>User first name: {lastName}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('get static path');
  const name = faker.name.firstName();
  console.log(name);
  return {
    paths: [{ params: { id: name }}],
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async () => { 
  console.log('get static props');
  const firstName = faker.name.firstName();
  console.log(firstName);
  return { props: { id: firstName } };
};


export default User;