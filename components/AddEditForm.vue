<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
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
  email: undefined,
  password: undefined,
  items: [{}],
})

function addItem() {
  if (!state.items) {
    state.items = []
  }
  state.items.push({})
}

function removeItem() {
  if (state.items) {
    state.items.pop()
  }
}

watch(
  () => props.isVisible,
  (val) => {
    open.value = val
  },
)

watch(open, (val) => {
  if (val !== props.isVisible) {
    emit('update:isVisible', val)
  }
})
</script>

<template>
  <UDrawer
    v-model:open="open"
    direction="right"
    inset
  >
    <template #content>
      <div class="min-w-96 min-h-96 size-full m-4">
        <h2 class="text-lg font-bold mb-4 text-primary border-b-2 pb-2">Add/Edit Form</h2>
        <!-- <UAccordion :items="AccordionItems">
          <template #body="{ item }"> This is the {{ item.label }} panel. </template>
        </UAccordion> -->
        <UForm
          :validate="validate"
          :state="state"
          class="space-y-4 overflow-auto"
          @submit="onSubmit"
        >
          <!-- Bill from -->
          <h4 class="mb-1 font-bold text-primary">Bill From</h4>
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
                v-model="state.paymentTerms"
                placeholder="Select payment terms"
                value-key="value"
                :items="paymentTerms"
                class="w-full"
              />
            </UFormField>
          </div>

          <UFormField
            label="Project Description"
            name="projectDescription"
          >
            <UInput
              v-model="state.projectDescription"
              class="w-full"
            />
          </UFormField>

          <UForm
            v-for="(item, count) in state.items"
            :key="count"
            attach
            class="flex gap-2"
          >
            <UFormField
              :label="!count ? 'Name' : undefined"
              name="itemName"
            >
              <UInput
                v-model="state.itemName"
                class="w-full"
              />
            </UFormField>
            <UFormField
              :label="!count ? 'Qty' : undefined"
              name="itemQty"
              class="w-20"
            >
              <UInput
                v-model="state.itemQty"
                type="number"
              />
            </UFormField>
            <UFormField
              :label="!count ? 'Price' : undefined"
              name="itemPrice"
              class="w-20"
            >
              <UInput
                v-model="state.itemPrice"
                type="number"
              />
            </UFormField>
            <UFormField
              :label="!count ? 'Total' : undefined"
              name="totalPrice"
              class="w-20"
            >
              <UInput
                v-model="state.totalPrice"
                type="number"
                disabled
              />
            </UFormField>
          </UForm>
          <div class="flex gap-2">
            <UButton
              color="neutral"
              variant="subtle"
              size="sm"
              @click="addItem()"
            >
              Add Item
            </UButton>

            <UButton
              color="neutral"
              variant="ghost"
              size="sm"
              @click="removeItem()"
            >
              Remove Item
            </UButton>
          </div>

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
