import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { format } from "date-fns";
import { AddDrawer } from "./add-drawer";
import { Category, columns } from "./columns";
import { getCategories } from "@/actions/category";

export const CategoryClient = async () => {
  const { categories } = await getCategories();

  const formattedCategories: Category[] = categories.map((cat) => ({
    ...cat,
    createdAt: format(cat.createdAt, "d-MM-yyyy"),
  }));
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title="Categorias"
          description="Manage yout categories for your store"
        />
        <AddDrawer />
      </div>
      <div className="w-96 min-w-full">
        <DataTable
          columns={columns}
          data={formattedCategories}
          searchKey="name"
        />
      </div>
    </>
  );
};
