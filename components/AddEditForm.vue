<script setup>
import { ref, reactive, watch } from 'vue'

const props = defineProps({
  isVisible: { type: Boolean, default: false },
})

const emit = defineEmits(['update:isVisible'])

const open = ref(props.isVisible)
const toast = useToast()

const paymentTerms = ref([
  { value: 1, label: 'Net 1 Day' },
  { value: 7, label: 'Net 7 Days' },
  { value: 14, label: 'Net 14 Days' },
  { value: 30, label: 'Net 30 Days' },
])

const state = reactive({
  clientName: '',
  clientEmail: '',
  street: '',
  city: '',
  postCode: '',
  country: '',
  invoiceDate: '',
  paymentTerm: null,
  projectDescription: '',
  items: [
    {
      name: '',
      qty: 0,
      price: 0,
      total: 0,
    },
  ],
})

// Sync drawer state with parent prop
watch(
  () => props.isVisible,
  (val) => (open.value = val),
)

watch(open, (val) => {
  if (val !== props.isVisible) {
    emit('update:isVisible', val)
  }
})

// Add a new blank item
function addItem() {
  state.items.push({
    name: '',
    qty: 0,
    price: 0,
    total: 0,
  })
}

// Remove item by index (keep at least one)
function removeItem(index) {
  if (state.items.length > 1) {
    state.items.splice(index, 1)
  }
}

// Submit handler
async function onSubmit(event) {
  const payload = event.data
  toast.add({
    title: 'Success',
    description: 'Form submitted.',
    color: 'success',
  })
  console.log('Submitted Data:', payload)
  reset()
}

// Reset form state
function reset() {
  Object.assign(state, {
    clientName: '',
    clientEmail: '',
    street: '',
    city: '',
    postCode: '',
    country: '',
    invoiceDate: '',
    paymentTerm: null,
    projectDescription: '',
    items: [
      {
        name: '',
        qty: 0,
        price: 0,
        total: 0,
      },
    ],
  })
}
</script>

<template>
  <UDrawer
    v-model:open="open"
    direction="right"
    inset
  >
    <template #content>
      <div class="m-4 pr-2 mr-0 overflow-y-scroll">
        <h2 class="text-lg font-bold mb-4 text-primary border-b-2 pb-2">Add/Edit Form</h2>

        <UForm
          :state="state"
          class="space-y-4 overflow-auto"
          @submit="onSubmit"
        >
          <!-- Bill to -->
          <h4 class="mb-1 font-bold text-primary">Bill To</h4>

          <UFormField
            label="Client's Name"
            name="clientName"
          >
            <UInput
              v-model="state.clientName"
              class="w-full"
            />
          </UFormField>

          <UFormField
            label="Client's Email"
            name="clientEmail"
          >
            <UInput
              v-model="state.clientEmail"
              class="w-full"
            />
          </UFormField>

          <UFormField
            label="Street Address"
            name="street"
          >
            <UInput
              v-model="state.street"
              class="w-full"
            />
          </UFormField>

          <div class="flex gap-2">
            <UFormField
              label="City"
              name="city"
            >
              <UInput
                v-model="state.city"
                class="w-full"
              />
            </UFormField>
            <UFormField
              label="Post code"
              name="postCode"
            >
              <UInput
                v-model="state.postCode"
                class="w-full"
              />
            </UFormField>
            <UFormField
              label="Country"
              name="country"
            >
              <UInput
                v-model="state.country"
                class="w-full"
              />
            </UFormField>
          </div>

          <!-- Invoice -->
          <h4 class="mb-1 font-bold text-primary">Invoice Details</h4>
          <div class="grid grid-flow-col gap-2">
            <UFormField
              label="Invoice Date"
              name="invoiceDate"
            >
              <DatePicker
                v-model="state.invoiceDate"
                placeholder="Choose a date"
                class="w-full"
              />
            </UFormField>
            <UFormField
              label="Payment Terms"
              name="paymentTerms"
            >
              <USelectMenu
                v-model="state.paymentTerm"
                placeholder="Select payment terms"
                value-key="value"
                :items="paymentTerms"
                class="w-full"
              />
            </UFormField>
          </div>

          <UFormField
            label="Description"
            name="projectDescription"
          >
            <UInput
              v-model="state.projectDescription"
              class="w-full"
            />
          </UFormField>

          <!-- Line Items -->
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <h4 class="mb-1 font-bold text-primary">Item List</h4>
              <UButton
                icon="i-lucide-plus"
                size="md"
                variant="solid"
                @click="addItem"
              >
                Add Item
              </UButton>
            </div>

            <div
              v-for="(item, index) in state.items"
              :key="index"
              class="flex gap-2 items-end"
            >
              <UFormField
                :label="index === 0 ? 'Name' : undefined"
                :name="`items.${index}.name`"
              >
                <UInput
                  v-model="item.name"
                  class="w-50"
                />
              </UFormField>

              <UFormField
                :label="index === 0 ? 'Qty' : undefined"
                :name="`items.${index}.qty`"
                class="w-20"
              >
                <UInput
                  v-model.number="item.qty"
                  type="number"
                  def
                />
              </UFormField>

              <UFormField
                :label="index === 0 ? 'Price' : undefined"
                :name="`items.${index}.price`"
                class="w-20"
              >
                <UInput
                  v-model.number="item.price"
                  type="number"
                />
              </UFormField>

              <UFormField
                :label="index === 0 ? 'Total' : undefined"
                :name="`items.${index}.total`"
                class="w-20"
              >
                <UInput
                  :model-value="item.qty * item.price"
                  type="number"
                  class="w-full"
                  disabled
                />
              </UFormField>

              <!-- Remove Button -->
              <UButton
                v-if="state.items.length > 1"
                icon="i-lucide-x"
                size="md"
                color="error"
                variant="solid"
                class="self-end mt-2"
                @click="removeItem(index)"
              />
            </div>
          </div>

          <!-- Add/Remove buttons -->

          <UButton
            type="submit"
            size="xl"
          >
            Submit
          </UButton>
        </UForm>
      </div>
    </template>
  </UDrawer>
</template>
