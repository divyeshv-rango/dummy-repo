import { ChevronDown, ChevronLeft, ChevronRight, Eye, Pencil, MoreVertical, Columns3, Check } from "lucide-react";
import { useState } from "react";

// Sample product data
const sampleProducts = [
  { id: 123, name: "Beanie", sku: "SKU-2957", type: "Simple", category: "Clothing", regularPrice: "$120.00", salePrice: "$100.00", stock: 52, images: 3 },
  { id: 847, name: "Rustic Wool Beanie", sku: "SKU-1234", type: "Variable", category: "Accessories", regularPrice: "$80.00", salePrice: "$65.00", stock: 25, images: 2 },
  { id: 927, name: "Vintage Camera", sku: "SKU-5678", type: "Simple", category: "Electronics", regularPrice: "$200.00", salePrice: "$180.00", stock: 0, images: 1 },
  { id: 456, name: "Classic Denim Jeans", sku: "SKU-9012", type: "Variable", category: "Clothing", regularPrice: "$150.00", salePrice: "$120.00", stock: 0, images: 4 },
  { id: 789, name: "Leather Dress Belt", sku: "SKU-3456", type: "Simple", category: "Accessories", regularPrice: "$60.00", salePrice: "$50.00", stock: 0, images: 2 },
];

function TableHead() {
  return (
    <div className="border-b-[0.5px] border-[#e5e5e5] border-solid box-border content-stretch flex items-start pb-[0.5px] pt-0 px-0 relative w-full" data-name="table head" data-node-id="67:7945">
      {/* Checkbox column */}
      <div className="bg-[#f5f5f5] border-r border-[#e5e5e5] border-solid h-[48px] relative shrink-0 w-[52px]">
        <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center pl-[24px] pr-[12px] py-[8px] relative">
          <button className="box-border content-stretch cursor-pointer flex gap-[8px] items-start p-0 relative shrink-0">
            <div className="bg-white border border-[#e5e5e5] border-solid rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[16px]" />
          </button>
        </div>
      </div>
      
      {/* ID column */}
      <div className="bg-[#f5f5f5] border-r-[0.5px] border-[#e5e5e5] border-solid h-[48px] relative shrink-0 w-[72px]">
        <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center px-[8px] py-0 relative w-[72px]">
          <div className="flex flex-[1_0_0] flex-col font-semibold h-full justify-center leading-0 min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#737373] whitespace-nowrap">
            <p className="leading-[20px] overflow-ellipsis overflow-hidden">ID</p>
          </div>
          <ChevronDown className="overflow-clip relative shrink-0 size-[10.667px] text-[#a3a3a3]" />
        </div>
      </div>
      
      {/* Name column */}
      <div className="bg-[#f5f5f5] border-r-[0.5px] border-[#e5e5e5] border-solid flex-[1_0_0] h-[48px] min-h-px min-w-px relative shrink-0">
        <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center px-[8px] py-0 relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-semibold h-full justify-center leading-0 min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#737373] whitespace-nowrap">
            <p className="leading-[20px] overflow-ellipsis overflow-hidden">Name</p>
          </div>
        </div>
      </div>
      
      {/* Images column */}
      <div className="bg-[#f5f5f5] border-r-[0.5px] border-[#e5e5e5] border-solid h-[48px] relative shrink-0 w-[124px]">
        <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center px-[8px] py-0 relative w-[124px]">
          <div className="flex flex-[1_0_0] flex-col font-semibold h-full justify-center leading-0 min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#737373] whitespace-nowrap">
            <p className="leading-[20px] overflow-ellipsis overflow-hidden">Images</p>
          </div>
        </div>
      </div>
      
      {/* Type column */}
      <div className="bg-[#f5f5f5] border-r-[0.5px] border-[#e5e5e5] border-solid h-[48px] relative shrink-0 w-[120px]">
        <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center px-[8px] py-0 relative w-[120px]">
          <div className="flex flex-col font-semibold justify-center leading-0 not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#737373] whitespace-nowrap">
            <p className="leading-[20px] overflow-ellipsis overflow-hidden">Type</p>
          </div>
        </div>
      </div>
      
      {/* SKU column */}
      <div className="bg-[#f5f5f5] border-r-[0.5px] border-[#e5e5e5] border-solid h-[48px] relative shrink-0 w-[96px]">
        <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center px-[8px] py-0 relative w-[96px]">
          <div className="flex flex-[1_0_0] flex-col font-semibold h-full justify-center leading-0 min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#737373] whitespace-nowrap">
            <p className="leading-[20px] overflow-ellipsis overflow-hidden">SKU</p>
          </div>
        </div>
      </div>
      
      {/* Category column */}
      <div className="bg-[#f5f5f5] border-r-[0.5px] border-[#e5e5e5] border-solid h-[48px] relative shrink-0 w-[190px]">
        <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center px-[8px] py-0 relative w-[190px]">
          <div className="flex flex-col font-semibold justify-center leading-0 not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#737373] whitespace-nowrap">
            <p className="leading-[20px] overflow-ellipsis overflow-hidden">Category</p>
          </div>
        </div>
      </div>
      
      {/* Regular Price column */}
      <div className="bg-[#f5f5f5] border-r-[0.5px] border-[#e5e5e5] border-solid h-[48px] relative shrink-0 w-[133px]">
        <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center justify-end px-[8px] py-0 relative w-[133px]">
          <div className="flex flex-col font-semibold justify-center leading-0 not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#737373] text-right whitespace-nowrap">
            <p className="leading-[20px] overflow-ellipsis overflow-hidden">Regular Price</p>
          </div>
        </div>
      </div>
      
      {/* Sale Price column */}
      <div className="bg-[#f5f5f5] border-r-[0.5px] border-[#e5e5e5] border-solid h-[48px] relative shrink-0 w-[123px]">
        <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center justify-end px-[8px] py-0 relative w-[123px]">
          <div className="flex flex-col font-semibold justify-center leading-0 not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#737373] text-right whitespace-nowrap">
            <p className="leading-[20px] overflow-ellipsis overflow-hidden">Sale Price</p>
          </div>
        </div>
      </div>
      
      {/* Stock column */}
      <div className="bg-[#f5f5f5] border-r-[0.5px] border-[#e5e5e5] border-solid h-[48px] relative shrink-0 w-[110px]">
        <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center justify-end px-[8px] py-0 relative w-[110px]">
          <div className="flex flex-col font-semibold justify-center leading-0 not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#737373] text-right whitespace-nowrap">
            <p className="leading-[20px] overflow-ellipsis overflow-hidden">Stock</p>
          </div>
        </div>
      </div>
      
      {/* Actions column */}
      <div className="bg-[#f5f5f5] border-r-[0.5px] border-[#e5e5e5] border-solid h-[48px] relative shrink-0 w-[170px]">
        <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center justify-end pl-[8px] pr-[16px] py-0 relative w-[170px]">
          <button className="bg-[#efeeff] box-border content-stretch cursor-pointer flex gap-[6.667px] items-center justify-center px-[8px] py-[6.667px] relative rounded-[6.667px] shadow-[0px_0.833px_1.667px_0px_rgba(0,0,0,0.05)] shrink-0 hover:bg-[#e0dfff] transition-colors">
            <Columns3 className="overflow-clip relative shrink-0 size-[16px] text-[#6b63f1]" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductRow({ product, isEven }) {
  const isOutOfStock = product.stock === 0;
  
  return (
    <div className={`border-b-[0.5px] border-[#e5e5e5] border-solid box-border content-stretch flex items-start relative w-full ${isEven ? 'bg-white' : 'bg-[#fbfbfb]'}`} data-name="Product row">
      {/* Checkbox */}
      <div className="border-r border-[#e5e5e5] border-solid box-border content-stretch flex gap-[10px] items-center pl-[24px] pr-[12px] py-[8px] relative self-stretch shrink-0 w-[52px]">
        <button className="box-border content-stretch cursor-pointer flex gap-[8px] items-start p-0 relative shrink-0">
          <div className="bg-white border border-[#e5e5e5] border-solid rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[16px]" />
        </button>
      </div>
      
      {/* ID */}
      <div className="border-r-[0.5px] border-[#e5e5e5] border-solid box-border content-stretch flex gap-[8px] h-[48px] items-center p-[8px] relative shrink-0 w-[72px]">
        <div className="flex flex-col font-normal justify-center leading-0 not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#737373] whitespace-nowrap">
          <p className="leading-[20px] overflow-ellipsis overflow-hidden">{product.id}</p>
        </div>
      </div>
      
      {/* Name */}
      <div className="border-r-[0.5px] border-[#e5e5e5] border-solid box-border content-stretch flex gap-[8px] h-[48px] items-center p-[8px] relative flex-[1_0_0] min-h-px min-w-px shrink-0">
        <div className="flex flex-col font-normal justify-center leading-0 not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#737373] whitespace-nowrap">
          <p className="leading-[20px] overflow-ellipsis overflow-hidden">{product.name}</p>
        </div>
      </div>
      
      {/* Images */}
      <div className="border-r-[0.5px] border-[#e5e5e5] border-solid box-border content-stretch flex gap-[4px] h-[48px] items-center px-[8px] py-[4px] relative shrink-0 w-[124px]">
        <div className="box-border content-stretch flex items-center pl-0 pr-[16px] py-0 relative shrink-0 z-2">
          {[1, 2, 3].slice(0, Math.min(product.images, 3)).map((_, idx) => (
            <div key={idx} className={`border border-[#fbfbfb] border-solid mr-[-16px] relative rounded-[4px] shrink-0 size-[36px] bg-gray-200 ${idx === 0 ? 'z-3' : idx === 1 ? 'z-2' : 'z-1'}`} />
          ))}
        </div>
        {product.images > 3 && (
          <div className="flex flex-col font-normal justify-center leading-0 not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[#737373] whitespace-nowrap z-1">
            <p className="leading-[16px] overflow-ellipsis overflow-hidden">+{product.images - 3}</p>
          </div>
        )}
      </div>
      
      {/* Type */}
      <div className="border-r-[0.5px] border-[#e5e5e5] border-solid box-border content-stretch flex gap-[4px] h-[48px] items-center overflow-clip p-[8px] relative shrink-0 w-[120px]">
        <div className={`box-border content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[8px] shrink-0 ${product.type === 'Simple' ? 'bg-[#eff6ff]' : 'bg-[#efeeff]'}`}>
          <p className={`font-medium leading-[16px] not-italic relative shrink-0 text-[12px] ${product.type === 'Simple' ? 'text-[#2563eb]' : 'text-[#6b63f1]'}`}>
            {product.type}
          </p>
        </div>
      </div>
      
      {/* SKU */}
      <div className="border-r-[0.5px] border-[#e5e5e5] border-solid box-border content-stretch flex gap-[8px] h-[48px] items-center p-[8px] relative shrink-0 w-[96px]">
        <div className="flex flex-col font-normal justify-center leading-0 not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#737373] whitespace-nowrap">
          <p className="leading-[20px] overflow-ellipsis overflow-hidden">{product.sku}</p>
        </div>
      </div>
      
      {/* Category */}
      <div className="border-r-[0.5px] border-[#e5e5e5] border-solid box-border content-center flex flex-wrap gap-[8px] h-[48px] items-center overflow-clip p-[8px] relative shrink-0 w-[190px]">
        <div className="bg-[#6b63f1] box-border content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[8px] shrink-0">
          <p className="font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[#fafafa]">
            {product.category}
          </p>
        </div>
      </div>
      
      {/* Regular Price */}
      <div className="border-r-[0.5px] border-[#e5e5e5] border-solid box-border content-stretch flex gap-[8px] h-[48px] items-center p-[8px] relative shrink-0 w-[133px]">
        <div className="flex flex-[1_0_0] flex-col font-normal justify-center leading-0 min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#737373] text-right whitespace-nowrap">
          <p className="leading-[20px] overflow-ellipsis overflow-hidden">{product.regularPrice}</p>
        </div>
      </div>
      
      {/* Sale Price */}
      <div className="border-r-[0.5px] border-[#e5e5e5] border-solid box-border content-stretch flex gap-[8px] h-[48px] items-center p-[8px] relative shrink-0 w-[123px]">
        <div className="flex flex-col font-normal justify-center leading-0 not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#737373] text-right whitespace-nowrap">
          <p className="leading-[20px] overflow-ellipsis overflow-hidden">{product.salePrice}</p>
        </div>
      </div>
      
      {/* Stock */}
      <div className="border-r-[0.5px] border-[#e5e5e5] border-solid box-border content-stretch flex gap-[8px] h-[48px] items-center p-[8px] relative shrink-0 w-[110px]">
        <div className="flex flex-col font-normal justify-center leading-0 not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-right whitespace-nowrap">
          <p className={`leading-[20px] overflow-ellipsis overflow-hidden ${isOutOfStock ? 'text-red-500' : 'text-[#737373]'}`}>
            {isOutOfStock ? 'Out of stock' : product.stock}
          </p>
        </div>
      </div>
      
      {/* Actions */}
      <div className="border-r-[0.5px] border-[#e5e5e5] border-solid box-border content-stretch flex gap-[8px] h-[48px] items-center justify-end pl-[8px] pr-[16px] py-[8px] relative shrink-0 w-[170px]">
        <button className="box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[36px] bg-white hover:bg-gray-50 transition-colors">
          <Eye className="overflow-clip relative shrink-0 size-[16px] text-[#737373]" />
        </button>
        <button className="box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[36px] bg-white hover:bg-gray-50 transition-colors">
          <Pencil className="overflow-clip relative shrink-0 size-[16px] text-[#737373]" />
        </button>
      </div>
    </div>
  );
}

function TablePagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const totalProducts = 100;
  
  return (
    <div className="box-border content-stretch flex items-center justify-between px-[24px] py-[8px] relative w-full" data-name="table pagination">
      <div className="flex flex-[1_0_0] flex-col font-normal justify-center leading-0 min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#737373] whitespace-nowrap">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden">
          <span>Showing </span>
          <span className="text-neutral-950">1-20</span>
          <span> of {totalProducts} products</span>
        </p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Pagination">
        <button 
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          className="box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center pl-[10px] pr-[16px] py-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 bg-white hover:bg-gray-50 transition-colors"
          disabled={currentPage === 1}
        >
          <ChevronLeft className="overflow-clip relative shrink-0 size-[16px] text-[#0a0a0a]" />
          <div className="flex flex-col font-medium justify-center leading-0 not-italic relative shrink-0 text-[14px] text-[#0a0a0a] whitespace-nowrap">
            <p className="leading-[20px]">Previous</p>
          </div>
        </button>
        
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[36px] transition-colors ${
              currentPage === page 
                ? 'bg-[#f5f5f5] border border-[#e5e5e5] border-solid' 
                : 'bg-white hover:bg-gray-50'
            }`}
          >
            <div className="flex flex-col font-medium justify-center leading-0 not-italic relative shrink-0 text-[14px] text-[#0a0a0a] whitespace-nowrap">
              <p className="leading-[20px]">{page}</p>
            </div>
          </button>
        ))}
        
        <button className="box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[36px] bg-white hover:bg-gray-50 transition-colors">
          <div className="overflow-clip relative shrink-0 size-[16px]">
            <span className="text-[#0a0a0a]">...</span>
          </div>
        </button>
        
        <button 
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          className="bg-[#f5f5f5] box-border content-stretch flex gap-[8px] h-[36px] items-center pl-[16px] pr-[10px] py-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[88px] hover:bg-gray-100 transition-colors"
          disabled={currentPage === totalPages}
        >
          <div className="flex flex-col font-medium justify-center leading-0 not-italic relative shrink-0 text-[14px] text-[#171717] whitespace-nowrap">
            <p className="leading-[20px]">Next</p>
          </div>
          <ChevronRight className="overflow-clip relative shrink-0 size-[16px] text-[#171717]" />
        </button>
      </div>
    </div>
  );
}

export default function ProductsTable() {
  return (
    <div className="box-border content-stretch flex flex-col items-start relative w-full" data-name="wrapper" data-node-id="67:7943">
      <div className="box-border content-stretch flex flex-col items-start relative w-full" data-name="table" data-node-id="67:7944">
        <TableHead />
        <div className="w-full">
          {sampleProducts.map((product, index) => (
            <ProductRow key={product.id} product={product} isEven={index % 2 === 0} />
          ))}
        </div>
        <TablePagination />
      </div>
    </div>
  );
}

