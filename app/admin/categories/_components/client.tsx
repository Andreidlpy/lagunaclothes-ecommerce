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
      <div className="flex flex-col items-start sm:flex-row sm:justify-between space-y-4 sm:space-y-0">
        <Heading
          title="Categorias"
          description="Manage yout categories for your store"
        />
        {/* <AddDrawer /> */}
      </div>
      <div>
        <DataTable
          columns={columns}
          data={formattedCategories}
          searchKey="name"
        />
      </div>
    </>
  );
};
