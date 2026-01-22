import { ExternalLink, Lightbulb, Star } from "lucide-react";

function Footer({ className }) {
  return (
    <div className={className} data-name="footer" data-node-id="365:6613">
      <div className="flex flex-col gap-[4px] items-start relative shrink-0" data-node-id="372:6860">
        <div className="flex items-center gap-[4px]" data-node-id="372:6861">
          <div className="flex flex-col font-medium justify-center leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#737373] whitespace-nowrap" data-node-id="372:6861">
            <p className="leading-none overflow-ellipsis overflow-hidden">Smart Manager</p>
          </div>
          <div className="bg-[#efeeff] box-border flex items-center justify-center px-[6.4px] py-[1.6px] relative rounded-[6.4px] shrink-0" data-name="Badge" data-node-id="372:6862">
            <p className="font-semibold leading-[12.8px] not-italic relative shrink-0 text-[9.6px] text-[#6b63f1]" data-node-id="I372:6862;71:637">
              PRO
            </p>
          </div>
        </div>
        <div className="flex-col font-normal justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[#a3a3a3] whitespace-nowrap" data-node-id="372:6893">
          <p className="leading-[16px]">v8.76.0</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-node-id="365:6610">
        <button className="box-border content-stretch flex gap-[6px] h-[32px] items-center px-[12px] py-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 bg-white hover:bg-gray-50 transition-colors" data-name="Button" data-node-id="367:6776">
          <ExternalLink className="shrink-0 size-[16px] text-[#737373]" data-name="Icon/ExternalLink" data-node-id="I367:6776;67:8239" />
          <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[#737373] whitespace-nowrap" data-node-id="I367:6776;67:8240">
            <p className="leading-[16px]">Visit StoreApps</p>
          </div>
        </button>
        <button className="box-border content-stretch flex gap-[6px] h-[32px] items-center px-[12px] py-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 bg-white hover:bg-gray-50 transition-colors" data-name="Button" data-node-id="372:6797">
          <Lightbulb className="shrink-0 size-[16px] text-[#737373]" data-name="Icon/Lightbulb" data-node-id="I372:6797;67:8239" />
          <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[#737373] whitespace-nowrap" data-node-id="I372:6797;67:8240">
            <p className="leading-[16px]">Request a Feature</p>
          </div>
        </button>
        <button className="box-border content-stretch flex gap-[6px] h-[32px] items-center px-[12px] py-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 bg-white hover:bg-gray-50 transition-colors" data-name="Button" data-node-id="365:6695">
          <Star className="shrink-0 size-[16px] text-[#737373]" data-name="Icon/Star" data-node-id="I365:6695;67:8239" />
          <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[#737373] whitespace-nowrap" data-node-id="I365:6695;67:8240">
            <p className="leading-[16px]">Rate Us</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default function Footer1() {
  return (
    <Footer className="box-border content-stretch flex items-center justify-between pb-[24px] pt-[80px] px-[24px] relative w-full" />
  );
}

