import { Typography, Box, MenuItem } from "@mui/material";
import type { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import type { UseCategoriesQueryParameters } from "../../../hooks/queries/useCategoriesQuery";
import useCategoriesQuery from "../../../hooks/queries/useCategoriesQuery";
import i18n from "../../../i18n";
import Splash from "../../Core/SplashScreen/SplashScreen";
import ControlledTextField from "../../Input/ControlledTextField/ControlledTextField";

const MAX_LENGTH = 100;
const MAX_NUM_LENGTH = 10;

export const ProductFormSchema = z.object({
  sku: z
    .string()
    .min(1, i18n.t("products:product_form.common.required"))
    .max(
      MAX_LENGTH,
      i18n.t("products:product_form.common.max_length", {
        maxLength: MAX_LENGTH,
      })
    ),
  productName: z
    .string()
    .min(1, i18n.t("products:product_form.common.required"))
    .max(
      MAX_LENGTH,
      i18n.t("products:product_form.common.max_length", {
        maxLength: MAX_LENGTH,
      })
    ),
  description: z
    .string()
    .min(1, i18n.t("products:product_form.common.required"))
    .max(
      MAX_LENGTH,
      i18n.t("products:product_form.common.max_length", {
        maxLength: MAX_LENGTH,
      })
    )
    .optional(),
  quantity: z
    .string()
    .min(1, i18n.t("products:product_form.common.required"))
    .max(
      MAX_NUM_LENGTH,
      i18n.t("products:product_form.common.max_length", {
        maxLength: MAX_NUM_LENGTH,
      })
    ),
  unitPrice: z
    .string()
    .min(1, i18n.t("products:product_form.common.required"))
    .max(
      MAX_NUM_LENGTH,
      i18n.t("products:product_form.common.max_length", {
        maxLength: MAX_NUM_LENGTH,
      })
    ),
  categoryId: z
    .string()
    .min(1, i18n.t("products:product_form.common.required")),
});

export type ProductFormSchemaType = z.infer<typeof ProductFormSchema>;

const ProductFormInputs = (): ReactElement => {
  const { t } = useTranslation("products");

  const { control } = useFormContext<ProductFormSchemaType>();

  const queryOptions: UseCategoriesQueryParameters = {
    page: 1,
    limit: 100,
  };

  const { data: categoryData, isFetching } = useCategoriesQuery(queryOptions);

  if (isFetching) {
    return <Splash />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Typography component="h1" variant="h5">
        {t("add_product.title")}
      </Typography>

      <ControlledTextField
        name="sku"
        control={control}
        inputProps={{
          label: t("product_form.sku.label"),
          placeholder: t("product_form.sku.placeholder"),
          fullWidth: true,
          variant: "standard",
        }}
      />
      <ControlledTextField
        name="productName"
        control={control}
        inputProps={{
          label: t("product_form.product_name.label"),
          placeholder: t("product_form.product_name.placeholder"),
          fullWidth: true,
          variant: "standard",
        }}
      />
      <ControlledTextField
        name="description"
        control={control}
        inputProps={{
          label: t("product_form.description.label"),
          placeholder: t("product_form.description.placeholder"),
          fullWidth: true,
          variant: "standard",
        }}
      />
      <ControlledTextField
        name="quantity"
        control={control}
        inputProps={{
          label: t("product_form.quantity.label"),
          placeholder: t("product_form.quantity.placeholder"),
          fullWidth: true,
          variant: "standard",
        }}
      />
      <ControlledTextField
        name="unitPrice"
        control={control}
        inputProps={{
          label: t("product_form.unit_price.label"),
          placeholder: t("product_form.unit_price.placeholder"),
          fullWidth: true,
          variant: "standard",
        }}
      />
      <ControlledTextField
        name="categoryId"
        control={control}
        inputProps={{
          select: true,
          label: t("product_form.sku.label"),
          placeholder: t("product_form.sku.placeholder"),
          fullWidth: true,
          variant: "standard",
        }}
      >
        {categoryData?.data
          ? categoryData.data.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))
          : undefined}
      </ControlledTextField>
    </Box>
  );
};

export default ProductFormInputs;
