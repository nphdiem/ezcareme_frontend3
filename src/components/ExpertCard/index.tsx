import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Expert } from "types/schema";
import { ReactComponent as LocationIcon } from "components/icons/Location.svg";
import { ReactComponent as CheckCircle } from "components/icons/CheckCircle.svg";
import { ReactComponent as StarFill } from "components/icons/StarFill.svg";
import { ReactComponent as StarHalf } from "components/icons/StarHalf.svg";
import { ReactComponent as StarEmpty } from "components/icons/StarEmpty.svg";
import { ReactComponent as HeartFill } from "components/icons/HeartFill.svg";
import { ReactComponent as Heart } from "components/icons/Heart.svg";
import { formatNumber, calculateStars, formatRoute } from "utils";
import EButton from "components/Button";
import Avatar from "components/Avatar";
import { Link, navigate } from "@reach/router";
import ROUTES from "constants/routes";

export interface ExpertCardProps {
  expert: Expert;
  className?: string;
}

const Card = styled(Link)`
  ${tw`py-5 px-10 flex items-stretch cursor-pointer`}
  box-shadow: 1px 5px 20px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
`;

const Label = styled.span`
  min-width: 150px;
`;

const QAButton = styled(EButton)`
  border-color: var(--bittersweet) !important;
`;

const Arrow = styled.div`
  width: 80px;
  height: 1px;
  background-color: var(--bittersweet);
  flex: none;
  position: relative;

  &:after {
    position: absolute;
    content: "";
    right: 0;
    top: -2px;
    width: 5px;
    height: 5px;
    border-right: solid 1px var(--bittersweet);
    border-top: solid 1px var(--bittersweet);
    transform: rotate(45deg);
  }
`;

const StarWrapper = styled.span`
  padding: 0 2px;
`;

const ExpertCard = ({ expert, className = "" }: ExpertCardProps) => {
  const [expertFavourite, setExpertFavourite] = useState(
    expert.isFavourite || false
  );
  return (
    <Card
      to={formatRoute(ROUTES.EXPERT_PROFILE, expert.id)}
      className={className}
    >
      <div>
        <Avatar url={expert.avatar} />
        <div className="mt-5 text-yellow-100 flex items-center justify-center">
          {calculateStars(expert.rating, 5).map((item, index) => {
            if (item === "full")
              return (
                <StarWrapper key={index}>
                  <StarFill width="18px" />
                </StarWrapper>
              );
            if (item === "half")
              return (
                <StarWrapper key={index}>
                  <StarHalf width="18px" />
                </StarWrapper>
              );
            return (
              <StarWrapper key={index}>
                <StarEmpty width="18px" />
              </StarWrapper>
            );
          })}
        </div>
        {expert.isFavourite !== null && (
          <div className="mt-6 flex items-center justify-center">
            <button
              className="text-pink-100 border-none cursor-pointer focus:outline-none"
              onClick={() => setExpertFavourite(!expertFavourite)}
            >
              {expertFavourite ? (
                <HeartFill width="28px" />
              ) : (
                <Heart width="28px" />
              )}
            </button>
            <span className="ml-2 text-black text-xs font-semobold">
              Yêu thích
            </span>
          </div>
        )}
      </div>
      <div className="px-20 flex-grow">
        <div className="text-black text-2xl font=semibold mb-2 flex items-center">
          {expert.name}{" "}
          <span className="text-pink-100 ml-3">
            <CheckCircle width="26px" />
          </span>
        </div>
        <div className="mb-5 flex items-center text-gray-400">
          <LocationIcon width="13px" />
          <span className="ml-3 font-semibold">{expert.location}</span>
        </div>
        <div className="flex items-center mb-2 text-base">
          <Label className="text-pink-100 font-semibold">Tham vấn online</Label>
          <span className="text-gray-300">
            {formatNumber(expert.callPrice)}/lượt
          </span>
        </div>
        <div className="flex items-center mb-5 text-base">
          <Label className="text-pink-100 font-semibold">Hỏi - Đáp EZ</Label>
          <span className="text-gray-300">{formatNumber(50000)}/lượt</span>
        </div>
        <div className="flex items-center mb-2 text-black">
          <Label>Nghề nghiệp</Label>
          <span className="font-semibold">{expert.job}</span>
        </div>
        <div className="flex items-center text-black mb-2">
          <Label>Chuyên môn</Label>
          <span className="font-semibold">{expert.expertises.join(", ")}</span>
        </div>
      </div>
      <div className="flex flex-col items-stretch pt-4">
        <EButton
          onClick={() =>
            navigate(formatRoute(ROUTES.EXPERT_BOOKING, expert.id))
          }
          type="primary"
          className="mb-8 flex-none"
        >
          <span className="text-lg">Đặt tham vấn Online</span>
        </EButton>
        <QAButton
          onClick={() => navigate(formatRoute(ROUTES.USER_QA, expert.id))}
          type="secondary"
          className="mb-8 flex-none w-full"
        >
          <span className="text-pink-100">Hỏi - Đáp EZ</span>
        </QAButton>
        <div className="flex flex-col items-center">
          <div className="text-xs text-gray-200 hover:text-pink-100">
            Xem thêm
          </div>
          <Arrow />
        </div>
      </div>
    </Card>
  );
};

export default ExpertCard;
