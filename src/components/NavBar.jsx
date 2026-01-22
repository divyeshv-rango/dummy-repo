import { Search, ChevronDown, FileSearch, History, Download, BookOpen, Settings } from "lucide-react";

function NavBar({ className }) {
  return (
    <div className={className} data-name="nav bar" data-node-id="359:6454">
      {/* Left: Smart Manager with PRO badge */}
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[332px]" data-node-id="359:6409">
        <div className="flex flex-col font-medium justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[#0a0a0a] whitespace-nowrap" data-node-id="359:6410">
          <p className="leading-[24px] overflow-ellipsis overflow-hidden">Smart Manager</p>
        </div>
        <div className="bg-[#efeeff] box-border content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Badge" data-node-id="359:6411">
          <p className="font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-[#6b63f1]" data-node-id="I359:6411;71:637">
            PRO
          </p>
        </div>
      </div>

      {/* Middle: Search section */}
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="search" data-node-id="359:6412">
        {/* Products dropdown */}
        <button className="bg-white border border-[#e5e5e5] border-solid box-border content-stretch cursor-pointer flex gap-[8px] h-[36px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 w-[129px] hover:bg-gray-50 transition-colors" data-name="select option" data-node-id="359:6413">
          <div className="flex flex-[1_0_0] flex-col font-medium justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-[#0a0a0a]" data-node-id="I359:6413;133:3661">
            <p className="leading-[20px] whitespace-pre-wrap">Products</p>
          </div>
          <ChevronDown className="overflow-clip relative shrink-0 size-[16px] text-[#0a0a0a]" />
        </button>

        {/* Search input */}
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-0 relative shrink-0 w-[372px]" data-name="Input" data-node-id="359:6414">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input Wrapper" data-node-id="I359:6414;71:384">
            <div className="bg-[#f5f5f5] border border-[#e5e5e5] border-solid box-border content-stretch flex gap-[4px] h-[36px] items-center overflow-clip px-[12px] py-[4px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Input" data-node-id="I359:6414;71:385">
              <Search className="overflow-clip relative shrink-0 size-[16px] text-[#737373]" />
              <input
                type="text"
                placeholder="Search products…"
                className="flex-[1_0_0] font-normal leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#737373] bg-transparent border-0 outline-none w-full"
                data-node-id="I359:6414;71:387"
              />
            </div>
          </div>
        </div>

        {/* Advanced Search button */}
        <div className="flex flex-row items-center self-stretch">
          <button className="box-border content-stretch cursor-pointer flex gap-[8px] h-full items-center justify-center pl-[10px] pr-[16px] py-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[168px] bg-white hover:bg-gray-50 transition-colors" data-name="Button" data-node-id="359:6415">
            <FileSearch className="overflow-clip relative shrink-0 size-[16px] text-[#737373]" data-name="Icon/TextSearch" data-node-id="I359:6415;67:8136" />
            <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[#737373] whitespace-nowrap" data-node-id="I359:6415;67:8137">
              <p className="leading-[20px]">Advanced Search</p>
            </div>
          </button>
        </div>
      </div>

      {/* Right: Action buttons */}
      <div className="content-stretch flex gap-[12px] items-center justify-end overflow-clip relative shrink-0" data-node-id="359:6416">
        {/* Edit History button */}
        <a className="box-border content-stretch cursor-pointer flex gap-[8px] h-[36px] items-center justify-center pl-[10px] pr-[16px] py-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 bg-white hover:bg-gray-50 transition-colors" data-name="Button" data-node-id="359:6417">
          <History className="overflow-clip relative shrink-0 size-[16px] text-[#0a0a0a]" data-name="Icon/History" data-node-id="I359:6417;67:8136" />
          <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[#0a0a0a] whitespace-nowrap" data-node-id="I359:6417;67:8137">
            <p className="leading-[20px]">Edit History</p>
          </div>
        </a>

        {/* Import button */}
        <button className="bg-[#f5f5f5] box-border content-stretch flex gap-[8px] h-[36px] items-center pl-[10px] pr-[16px] py-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[95px] hover:bg-gray-100 transition-colors cursor-pointer" data-name="Button" data-node-id="359:6418">
          <Download className="overflow-clip relative shrink-0 size-[16px] text-[#171717]" data-name="Icon/Import" data-node-id="I359:6418;67:8071" />
          <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[#171717] whitespace-nowrap" data-node-id="I359:6418;67:8072">
            <p className="leading-[20px]">Import</p>
          </div>
        </button>

        {/* BookOpen icon button */}
        <button className="bg-[#f5f5f5] box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[36px] hover:bg-gray-100 transition-colors cursor-pointer" data-name="Button" data-node-id="359:6419">
          <BookOpen className="overflow-clip relative shrink-0 size-[16px] text-[#171717]" data-name="Icon/BookOpen" data-node-id="I359:6419;67:8178" />
        </button>

        {/* Settings icon button */}
        <button className="bg-[#f5f5f5] box-border content-stretch cursor-pointer flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[36px] hover:bg-gray-100 transition-colors" data-name="Button" data-node-id="359:6420">
          <Settings className="overflow-clip relative shrink-0 size-[16px] text-[#171717]" data-name="Icon/Settings" data-node-id="I359:6420;67:8178" />
        </button>
      </div>
    </div>
  );
}

export default function NavBar1() {
  return (
    <NavBar className="bg-white border-b border-[#e5e5e5] border-solid box-border content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full" />
  );
}

