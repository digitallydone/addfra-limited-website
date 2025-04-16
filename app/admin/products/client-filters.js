'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { Filter, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from 'react';

export default function ClientFilters({ currentParams }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(currentParams.search || "");

  const updateParams = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all" || value === "") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    params.delete('page'); // Reset pagination
    router.push(`?${params.toString()}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateParams('search', search);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
      <div className="w-full md:w-auto flex items-center gap-2">
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" /> Filters <ChevronDown className="h-4 w-4" />
        </Button>

        <Select
          onValueChange={(val) => updateParams("category", val)}
          defaultValue={currentParams.category || "all"}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="parts">Parts</SelectItem>
            <SelectItem value="accessories">Accessories</SelectItem>
            <SelectItem value="electronics">Electronics</SelectItem>
            <SelectItem value="tools">Tools</SelectItem>
          </SelectContent>
        </Select>

        <Select
          onValueChange={(val) => updateParams("status", val)}
          defaultValue={currentParams.status || "all"}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="In Stock">In Stock</SelectItem>
            <SelectItem value="Low Stock">Low Stock</SelectItem>
            <SelectItem value="Out of Stock">Out of Stock</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <form onSubmit={handleSubmit} className="w-full md:w-auto flex items-center gap-2">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
          <Input
            type="search"
            placeholder="Search products..."
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Button type="submit" variant="outline">Search</Button>
      </form>
    </div>
  );
}
