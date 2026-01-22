import { ChevronDown, Plus, Save } from "lucide-react";
import { useState } from "react";

export default function Actions() {
  const [showVariations, setShowVariations] = useState(false);

  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pb-0 pt-[24px] px-[24px] relative w-full" data-name="actions" data-node-id="80:133">
      {/* Products heading */}
      <div className="flex flex-col font-semibold justify-center leading-0 not-italic relative shrink-0 text-[18px] text-[#171717] whitespace-nowrap" data-node-id="133:4416">
        <p className="leading-[28px]">Products</p>
      </div>

      {/* Custom view dropdown */}
      <div className="content-stretch flex items-center relative shrink-0" data-name="Custom view button" data-node-id="267:5507">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="wrapper" data-node-id="I267:5507;263:5487">
          <button className="border border-[#e5e5e5] border-solid box-border content-stretch cursor-pointer flex gap-[8px] h-[36px] items-center pl-[16px] pr-[12px] py-[6px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 bg-white hover:bg-gray-50 transition-colors" data-name="Custom view button" data-node-id="I267:5507;263:5455">
            <div className="flex flex-col font-medium justify-center leading-0 not-italic relative shrink-0 text-[14px] text-[#0a0a0a] whitespace-nowrap" data-node-id="I267:5507;263:5455;67:8259">
              <p className="leading-[20px]">
                <span className="font-normal not-italic">Custom view:</span>
                <span>{` None`}</span>
              </p>
            </div>
            <ChevronDown className="overflow-clip relative shrink-0 size-[16px] text-[#0a0a0a]" />
          </button>
        </div>
      </div>

      {/* Show variations toggle */}
      <button 
        className="box-border content-stretch cursor-pointer flex gap-[8px] items-center p-0 relative shrink-0" 
        data-name="Switch" 
        data-node-id="194:3865"
        onClick={() => setShowVariations(!showVariations)}
      >
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="Label Wrapper" data-node-id="I194:3865;150:3142">
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Text Switch Wrapper" data-node-id="I194:3865;150:3143">
            <p className="font-normal leading-none not-italic relative shrink-0 text-[14px] text-[#0a0a0a]" data-node-id="I194:3865;150:3144">
              Show variations
            </p>
          </div>
        </div>
        <div className={`border-2 border-solid box-border content-stretch flex gap-[10px] h-[16px] items-center px-[2px] py-0 relative rounded-[9999px] shrink-0 w-[28px] transition-colors ${showVariations ? 'bg-[#6b63f1] border-[#6b63f1]' : 'bg-[#e5e5e5] border-transparent'}`} data-name="Switch" data-node-id="I194:3865;150:3146">
          <div className={`bg-white rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[12px] transition-transform ${showVariations ? 'translate-x-[12px]' : 'translate-x-0'}`} data-name="Switch" data-node-id="I194:3865;150:3147" />
        </div>
      </button>

      {/* Spacer */}
      <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px shrink-0" data-name="empty" data-node-id="95:3908" />

      {/* Action buttons */}
      <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="80:134">
        {/* New Product button */}
        <button className="bg-[#efeeff] box-border content-stretch cursor-pointer flex gap-[8px] h-[36px] items-center justify-center pl-[10px] pr-[16px] py-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 hover:bg-[#e0dfff] transition-colors" data-name="Button" data-node-id="80:144">
          <Plus className="overflow-clip relative shrink-0 size-[16px] text-[#6b63f1]" data-name="Icon/Plus" data-node-id="I80:144;130:2724" />
          <div className="flex flex-col font-medium justify-center leading-0 not-italic relative shrink-0 text-[14px] text-[#6b63f1] whitespace-nowrap" data-node-id="I80:144;130:2725">
            <p className="leading-[20px]">New Product</p>
          </div>
        </button>

        {/* Save button */}
        <div className="content-stretch flex items-start relative shrink-0" data-name="Save Button" data-node-id="354:6401">
          <button className="box-border content-stretch cursor-pointer flex gap-[8px] h-[36px] items-center justify-center opacity-50 pl-[10px] pr-[16px] py-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 bg-white hover:bg-gray-50 transition-colors disabled:cursor-not-allowed" data-name="Button" data-node-id="I354:6401;354:6242" disabled>
            <Save className="overflow-clip relative shrink-0 size-[16px] text-[#0a0a0a]" />
            <div className="flex flex-col font-medium justify-center leading-0 not-italic relative shrink-0 text-[14px] text-[#0a0a0a] whitespace-nowrap" data-node-id="I354:6401;354:6242;67:8149">
              <p className="leading-[20px]">Save</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

