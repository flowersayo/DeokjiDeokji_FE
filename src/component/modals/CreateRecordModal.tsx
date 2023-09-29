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
import { createRecord } from 'api/record';
import CategorySelector from 'component/home/CategorySelector';
import ToastMessage from 'component/feed/ToastMessage';
import SliderUI from 'component/home/SliderUI';

const CreateRecordModal = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0); // 0단계부터 시작
  const [isVisible, setIsVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg: string) => {
    setIsVisible(true);
    setToastMessage(msg);
  };

  useEffect(() => {
    setCurrentStep(0);
  }, [isOpen]);

  const initialVisitRecord: IRecord = {
    purpose: 0, // 방문 목적 0 : 덕지순례 갈예정 , 1: 갔다옴
    place: {
      type: 'Cafe',
      id: 1234, // 식별
      address: '',
      name: '', // 장소이름
      latitude: 100.0, //  위도
      longitude: 100.0, // 경도
    },

    group: 'group', // 그룹명
    member: 'member', // 멤버명
    temperature: -1,
  };

  const [visitRecord, setVisitRecord] = useState(initialVisitRecord);
  const {
    purpose,
    place,
    group,
    member,
    place: { type },
    temperature,
  } = visitRecord; //비구조화 할당

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
  const handleChangeCategory = (category: string) => {
    const updatedPlace = { ...initialVisitRecord.place };
    updatedPlace.type = category;
    setVisitRecord({ ...visitRecord, place: updatedPlace });
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

  const handleChangeTemperature = (temperature: number) => {
    setVisitRecord({ ...visitRecord, temperature: temperature });
  };

  const endRecord = async () => {
    if (purpose === 1 && temperature === -1) {
      // 기록 남기기 선택했으면 온도 필수 입력
      return;
    }
    //TODO API 요청

    console.log('완성된 기록:', visitRecord);
    const response = await createRecord(visitRecord);
    console.log(response);
    //  if(response.status==200){
    handleMoveToStep(4);
    setVisitRecord(initialVisitRecord);
    // }
  };

  console.log(visitRecord);
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
      <CategorySelector
        selectedCategory={type}
        setSelectedCategory={handleChangeCategory}
      />
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
          onClick={() => {
            if (place.name || place.type) {
              handleMoveToStep(currentStep + 1);
            } else {
              showToast('장소를 선택해주세요!');
            }
          }}
        />
      </Row>
    </Box>,
    <Box key="step3">
      <Title>기록과 관련된 멤버를 선택해주세요!</Title>
      <DropDownList
        selected={{ group: group, member: member }}
        setSelected={handleChangeMember}
      />
      <Row>
        <MainBtn
          type={0}
          text="이전"
          onClick={() => handleMoveToStep(currentStep - 1)}
        />
        {purpose === 0 ? (
          <MainBtn type={1} text="등록하기" onClick={endRecord} />
        ) : (
          <MainBtn
            type={1}
            text="다음"
            onClick={() => {
              if (group && member) {
                handleMoveToStep(currentStep + 1);
              } else {
                showToast('멤버를 선택해주세요!');
              }
            }}
          />
        )}
      </Row>
    </Box>,
    <Box key="step4">
      <Title>{place.name} 에 대한 온도를 등록해주세요!</Title>
      <SliderUI
        temperature={temperature}
        setTemperature={handleChangeTemperature}
      />
      <MainBtn type={1} text="등록하기" onClick={endRecord} />
    </Box>,
    <Box key="step5">
      <Title>등록이 완료됐어요!</Title>
      <img src={DuckJiSrc} />
      <MainBtn type={1} text="네!" onClick={() => setOpen(false)} />
    </Box>,
  ];

  return (
    <BottomSheet isOpen={isOpen} setOpen={setOpen} step={currentStep}>
      <ModalContent>{steps[currentStep]}</ModalContent>
      {isVisible && (
        <ToastMessage
          text={toastMessage}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      )}
    </BottomSheet>
  );
};
export default CreateRecordModal;

const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
