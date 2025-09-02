import styled from "styled-components";

type InfoBannerProps = {
    title: string;
    message: string;
};

// Le conteneur principal
const Banner = styled.aside`
  background-color: ${({ theme }) => theme.colors.info[500]};
  color: white;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

// L’icône (ℹ️)
const Icon = styled.span`
  font-size: 1.5rem;
  flex-shrink: 0;
`;

// Le contenu texte
const Content = styled.div`
  strong {
    display: block;
    font-size: ${({ theme }) => theme.typography.h3.size};
    margin-bottom: 4px;
  }

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.body.size};
  }
`;

function InfoBanner({ title, message }: InfoBannerProps) {
    return (
        <Banner role="note" aria-label={title}>
            <Icon aria-hidden>ℹ️</Icon>
            <Content>
                <strong>{title}</strong>
                <p>{message}</p>
            </Content>
        </Banner>
    );
}

export default InfoBanner;