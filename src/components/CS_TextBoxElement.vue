<template>
    <div>
        <!-- text --  -->
        <div class="input">
            <p>text</p>
            <div class="form-row ">
                <!-- font size -->
                <div class="form-group col-md-4">
                    <label for="inp_font_size">font size</label>
                    <select id="inp_font_size" @change="$emit('change-textSize', $event)">
                        <option v-for="d in inp_font_size" :value="d">
                            {{ d }}
                        </option>
                    </select>
                </div>

                <!-- font Weight -->
                <div class="form-group col-md-4">
                    <label for="inp_font_weight">font Weight</label>
                    <select id="inp_font_weight" @change="$emit('change-textWeight', $event)">
                        <option v-for="d in inp_font_style" :value="d.id">
                            {{ d.text }}
                        </option>
                    </select>
                </div>
                <!-- font family -->
                <div class="form-group col-md-4">
                    <label for="inp_font_family">font family</label>
                    <select id="font-family">
                        <option value="arial">Arial</option>

                    </select>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "csTextBoxElement",
    props: {
        inp_font_size: Array,
        inp_font_style: Array,
    },
}

</script>
<style scoped>
.input {
    border: 1px solid black;
}
</style>