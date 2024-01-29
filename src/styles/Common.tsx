import styled, { css } from "styled-components";

export const Flex = styled.div`
  display: flex;
`;
export const FlexItem = styled.div`
  flex: 1;
`;
export const FlexColumn = styled(Flex)`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
`;
export const FlexStart = styled(Flex)`
  align-items: center;
  justify-content: flex-start;
`;
export const FlexEnd = styled(Flex)`
  align-items: center;
  justify-content: flex-end;
`;
export const FlexCenter = styled(Flex)`
  align-items: center;
  justify-content: center;
`;
export const FlexBetween = styled(Flex)`
  align-items: center;
  justify-content: space-between;
`;
export const FlexAround = styled(Flex)`
  align-items: center;
  justify-content: space-around;
`;
export const FlexAlignCenter = styled.div`
  display: flex;
  align-items: center;
`;
export const FlexAlignEnd = styled(FlexColumn)`
  align-items: flex-end;
`;

export const Space4 = styled.div`
  height: 4px;
  line-height: 4px;
  font-size: 0;
`;
export const Space8 = styled.div`
  height: 8px;
  line-height: 8px;
  font-size: 0;
`;
export const Space16 = styled.div`
  height: 16px;
  line-height: 16px;
  font-size: 0;
`;
export const Space24 = styled.div`
  height: 24px;
  line-height: 24px;
  font-size: 0;
`;
export const Space10 = styled.div`
  height: 10px;
  line-height: 10px;
  font-size: 0;
`;
export const Space20 = styled.div`
  height: 20px;
  line-height: 20px;
  font-size: 0;
`;
export const Space30 = styled.div`
  height: 30px;
  line-height: 30px;
  font-size: 0;
`;
export const Space40 = styled.div`
  height: 40px;
  line-height: 40px;
  font-size: 0;
`;
export const Wing8 = styled.div`
  padding: 0 8px;
`;
export const Wing10 = styled.div`
  padding: 0 10px;
`;
export const Wing20 = styled.div`
  padding: 0 20px;
`;
export const Wing40 = styled.div`
  padding: 0 40px;
`;
export const ActiveCss = css`
  cursor: pointer;
  &:active {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }
`;
export const TextEllipsis = css`
  flex-shrink: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
