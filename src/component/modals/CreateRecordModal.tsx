import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import BottomSheet from 'component/BottomSheet';
import MainBtn from 'component/MainBtn';
import { Title, Body1_1, Body2_1, Body2_2, Body2_3 } from 'styles/font';
import SelectBox from '../home/SelectBox';
import SearchPlace from 'component/home/SearchPlace';
import { IPlace, IRecord } from 'utils/interface';
import DropDownList from 'component/home/DropDownList';
import DuckJiSrc from 'assets/images/duckji.svg';

const CreateRecordModal = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0); // 0단계부터 시작

  useEffect(() => {
    setCurrentStep(0);
  }, [isOpen]);

  const initialVisitRecord: IRecord = {
    purpose: 0, // 방문 목적 0 : 덕지순례 갈예정 , 1: 갔다옴
    category: 'cafe',
    place: {
      id: 1234, // 식별
      address: '',
      name: '', // 장소이름
      latitude: 100.0, //  위도
      longitude: 100.0, // 경도
    },

    group: '', // 그룹명
    member: '', // 멤버명
    temperature: 100,
  };

  const [visitRecord, setVisitRecord] = useState(initialVisitRecord);
  const { purpose, place, group, member } = visitRecord; //비구조화 할당

  const handleMoveToStep = (step: number) => {
    setCurrentStep(step);
  };
  const handleChangePurpose = (purpose: number) => {
    console.log(purpose);
    setVisitRecord({ ...visitRecord, purpose: purpose });
  };
  const handleChangePlace = (place: IPlace) => {
    setVisitRecord({ ...visitRecord, place: place });
  };
  const handleChangeMember = ({
    group,
    member,
  }: {
    group: string;
    member: string;
  }) => {
    setVisitRecord({ ...visitRecord, group, member });
  };

  const createRecord = () => {
    //TODO API 요청

    console.log(visitRecord);
    handleMoveToStep(3);
    //  setVisitRecord(initialVisitRecord);
  };
  // step
  // 0 : 목적 선택
  // 1: 장소 선택
  // 2: 멤버 선택

  const steps = [
    <Box key="step1">
      <Title>어떤 기록을 남기시나요?</Title>
      <SelectBox option={purpose} setOption={handleChangePurpose} />
      <MainBtn
        type={1}
        text="다음"
        onClick={() => handleMoveToStep(currentStep + 1)}
      />
    </Box>,
    <Box key="step2">
      <Title>장소를 검색해보세요!</Title>
      <SearchPlace place={place} setPlace={handleChangePlace} />
      <Row>
        <MainBtn
          type={0}
          text="이전"
          onClick={() => handleMoveToStep(currentStep - 1)}
        />
        <MainBtn
          type={1}
          text="다음"
          onClick={() => handleMoveToStep(currentStep + 1)}
        />
      </Row>
    </Box>,
    <Box key="step3">
      <Title>기록과 관련된 멤버를 선택해주세요!</Title>
      <DropDownList
        setSelectedMember={handleChangeMember}
        selectedMember={member}
      />
      <Row>
        <MainBtn
          type={0}
          text="이전"
          onClick={() => handleMoveToStep(currentStep - 1)}
        />
        <MainBtn type={1} text="등록하기" onClick={createRecord} />
      </Row>
    </Box>,
    <Box key="step4">
      <Title>등록이 완료됐어요!</Title>
      <img src={DuckJiSrc} />
      <MainBtn type={1} text="네!" onClick={() => setOpen(false)} />
    </Box>,
  ];

  const handleCreteRecord = () => {
    //TODO record POST 요청
  };
  return (
    <BottomSheet isOpen={isOpen} setOpen={setOpen} step={currentStep}>
      <ModalContent>{steps[currentStep]}</ModalContent>
    </BottomSheet>
  );
};

const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  padding-top: 12px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 28px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 26px;
  margin-top: 26px;
  margin-bottom: 26px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 15px;
`;
export default CreateRecordModal;
