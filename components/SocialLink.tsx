import Link from 'next/link'
import Image from 'next/image'
import React from 'react';

interface SocialLinkProps {
    className?: string;
    icon: StaticImageData;
    destination: string;
    altText: string;
}

const SocialLink: React.FC<SocialLinkProps> = (props) => {
    return (
      <div className={props.className}>
          <Link href={props.destination} passHref>
          <Image src={props.icon} alt={props.altText} width= {60} height={60}/>
          </Link>
      </div>
    );
  };
  
  export default SocialLink;