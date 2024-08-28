import image from "./images/image-qr-code.png";

function QRCode() {
  return (
    <div className="flex h-[499px] w-[320px] flex-col items-center rounded-[20px] bg-white text-center drop-shadow-md">
      <div className="mt-[1rem] h-[288px] w-[288px] rounded-[10px] bg-blue-500">
        <img alt="QR code" className="rounded-[1.25rem]" src={image} />
      </div>
      <h1 className="mx-[32px] mb-[16px] mt-[24px] text-[1.375rem] leading-[1.65rem] font-bold text-slate-900">
        Improve your front-end skills by building projects
      </h1>
      <p className="mx-[32px] leading-[1.3125rem] text-[0.9375rem] text-slate-500">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default QRCode;
