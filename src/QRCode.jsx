import image from "./images/image-qr-code.png";

function QRCode() {
  return (
    <div className="flex h-[499px] w-[320px] flex-col items-center rounded-[20px] bg-white text-center drop-shadow-md">
      <div className="mt-[16px] h-[288px] w-[288px] rounded-[10px] bg-blue-500">
        <img className="rounded-[20px]" src={image} />
      </div>
      <p className="mx-[32px] mb-[16px] mt-[24px] text-xl font-bold text-slate-900">
        Improve your front-end skills by building projects
      </p>
      <p className="mx-[32px] text-sm text-slate-500">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default QRCode;
