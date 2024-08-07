import React from "react";
import styled from "styled-components";
import { useGetUsersQuery, useGetSocialsQuery } from "../app/apiSlice";
import { Icon } from "@iconify/react";
import { Blog } from "../config";


const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;


const SocialLinks = () => {
  const { data: userData } = useGetUsersQuery();
  const { isSuccess, error, data: socialsData } = useGetSocialsQuery();

  React.useEffect(() => {
    if (error) {
      console.log(
        `${error.status} - check getSocials query in src/app/apiSlice.js`
      );
    }
  }, [error, socialsData]);

  return (
    <StyledSocialLinks>
      <a
        href={userData.html_url}
        aria-label="Check out my GitHub profile."
        className="link-icons"
      >
        <Icon icon="icomoon-free:github" />
      </a>
      {isSuccess &&
        socialsData.map((element, index) => {
          let icon;
          switch (element.provider) {
            case "linkedin":
              icon = <Icon icon="fa-brands:linkedin" />;
              break;
            case "twitter":
              icon = <Icon icon="fa6-brands:square-x-twitter" />;
              break;
            case "facebook":
              icon = <Icon icon="fa-brands:facebook-square" />;
              break;
            case "instagram":
              icon = <Icon icon="fa-brands:instagram-square" />;
              break;
            case "tiktok":
              icon = <Icon icon="fa-brands:tiktok" />;
              break;

            default:
              icon = <Icon icon="ph:link-bold" />;
              break;
          }
          return (
            <a
              key={index}
              href={element.url}
              aria-label="External link"
              className="link-icons"
            >
              {icon}
            </a>
          );
        })}
      {userData.blog && (
        <a
          href={userData.blog}
          aria-label="External link"
          className="link-icons"
        >
          {Blog ? Blog : <Icon icon="ph:link-bold" />}
        </a>
      )}
    </StyledSocialLinks>
  );
};


export default SocialLinks;
