import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Container } from "@mui/material";
import type { ReactElement } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import type { ProductFormSchemaType } from "../../../components/Forms/ProductFormInputs/ProductFormInputs";
import ProductFormInputs, {
  ProductFormSchema,
} from "../../../components/Forms/ProductFormInputs/ProductFormInputs";

const AddProduct = (): ReactElement => {
  const { t } = useTranslation("products");

  const formMethods = useForm<ProductFormSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(ProductFormSchema),
    defaultValues: {
      sku: "",
      productName: "",
      description: "",
      quantity: "",
      unitPrice: "",
    },
  });

  const { handleSubmit } = formMethods;

  const onFormSubmitted = handleSubmit(() => {
    // TODO: Call API
  });

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={onFormSubmitted}>
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <ProductFormInputs />
          <Button variant="contained" size="large">
            {t("add_product.button")}
          </Button>
        </Container>
      </form>
    </FormProvider>
  );
};

export default AddProduct;
