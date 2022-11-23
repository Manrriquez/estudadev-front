import styled from "styled-components";

const StyledLayout = styled.div`
    position: relative;
    background: #f5f5f5;
    min-height: 100vh;
    width: calc(100% - 240px);
    left: 240px;
    transition: all 0.5s ease;
`;

const LayoutContent = styled.div`
    position: relative;
    padding-top: 104px;
`;

const GroupBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 20px;
    margin-bottom: 26px;
`;

const BoxItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% / 4 - 15px);
    background: #fff;
    padding: 15px 14px;
    border-radius: 12px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

const LayoutButton = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 500;

    i {
        font-size: 35px;
        margin-right: 10px;
    }
`;

const LayoutTitle = styled.span``;

export {StyledLayout, LayoutContent, GroupBox, BoxItem, LayoutButton, LayoutTitle};